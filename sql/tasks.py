from __future__ import absolute_import,unicode_literals

from celery import Celery
from celery import shared_task
from celery.schedules import crontab
from celery import chord, group, chain
from celery.utils.log import get_task_logger
import logging
import datetime,time
from logging.handlers import TimedRotatingFileHandler
import re
from sql import  database_method
from oraiops.celeryapp import app
#app = Celery('proj',broker='redis://127.0.0.1',backend='redis://127.0.0.1')

@app.task(queue='for_task_sql')
def add(x,y):
    return x+y

#@periodic_task(run_every=300, name="begin")
@app.task(queue='for_task_sql')
def begin():
    time_ = datetime.datetime.now();
    gath_time = time_.strftime("%Y-%m-%d %H:%M")
    print("begin gath time: %s" %gath_time)
    task_list = []
    for i in range(2):
      task_list.append(get_top_sql.s(i,gath_time))
    print(task_list)
    add_chord_sig = chord(group(task_list),begin_detect_outlier.si(gath_time))
    add_chord_sig.delay()

# @app.task
# def add(x):
#     val = 1
#     print("running...",x)
#     for i in range(x):
#       val = val*(i+1)
#     return 'The total is '+str(val)
#
# @app.task
# def add_1(x,y):
#     print("running...",x,y)
#     return 'The second total is '+str(x+y)
#
# @app.task
# def run_cmd(cmd):
#     print('run cmd...',cmd)
#     cmd_obj=subprocess.Popen(cmd,shell=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE)
#     return cmd_obj.stdout.read().decode("utf-8")

# @app.task
# def primsg(msg):
#     add_chord = group(add_1.s(i, i) for i in range(10))
#     result = add_chord.delay()
#     #print(result.status)

def top_log():
    log = logging.getLogger("zj_aiops_run.log")
    log.setLevel(logging.INFO)
    log_fmt = '%(asctime)s [%(module)s] %(levelname)s [%(lineno)d] %(message)s'
    formatter = logging.Formatter(log_fmt, '%Y-%m-%d_%H-%M')
    # create TimedRotatingFileHandler object
    log_file_handler = TimedRotatingFileHandler(filename="sql_anomy_detect.log", when="M", interval=3, backupCount=2)
    log_file_handler.suffix = "%Y-%m-%d_%H-%M.log"
    log_file_handler.extMatch = re.compile(r"^\d{4}-\d{2}-\d{2}_\d{2}-\d{2}.log$")
    log_file_handler.setFormatter(formatter)
    log.addHandler(log_file_handler)
    return log

# @app.on_after_configure.connect
# def setup_periodic_task(sender,**kwargs):
#     sender.add_periodic_task(2.0,test.s('hello'),naame='add every 10')
#
#     # sender.add_periodic_task(30.0, test.s('world'), expires=10)
#     #
#     # sender.add_periodic_task(crontab(hour=7,minute=30,day_of_week=1),test.s("happy"))

@app.task(queue='for_task_sql')
def get_top_sql(i,gath_time):
    logger = top_log()
    gath_time_ = datetime.datetime.strptime(gath_time.encode('utf-8').decode("utf-8"), "%Y-%m-%d %H:%M")
    print("begin collect time:%s ,The %s" %(gath_time_,i))
    try:
        conn = database_method.initial_connect('dmuser', 'dmuser', 'dmtest')
        conn = conn.create_conn()

        if i == 0:
            top_sql = """
            select a.*
            from
              (select inst_id as inst_id,
                    row_number() over (partition by inst_id order by cpu_time desc) as rc,
                    row_number() over (partition by inst_id order by disk_reads desc) as rr,
                    row_number() over (partition by inst_id order by elapsed_Time desc) as rt,
                    row_number() over (partition by inst_id order by BUFFER_GETS desc) as bf,
                    PARSING_SCHEMA_NAME db_USER,
                    sql_id,
                    round(cpu_time/1e6) as cpu_s ,
                    round(elapsed_Time/1e6) as elap_s ,
                    round((elapsed_Time - cpu_time)/1e6) wait_s,
                    trunc((elapsed_Time - cpu_time)*100/greatest(elapsed_Time,1),1)||'%' as "wait/elap",
                    executions as execs,
                    round(elapsed_Time/(executions+1)/1e6,2) ela_Pe,
                    buffer_gets as tot_bufs,
                    round(buffer_gets/greatest(executions,1),1) as avg_buf,
                    disk_reads as reads,
                    round(USER_IO_WAIT_TIME/1e6) as IOwait_s,
                    (select distinct name from gv$database) as db_name,
                    (select distinct dbid from gv$database) as dbid,
                    plan_hash_value
                    from gv$sqlarea t
                    where PARSING_SCHEMA_NAME in ('DMUSER')
                ) a
            where rc <=5 or rr<=5 or rt<=5 or bf<=5 
            order by inst_id,rc
            """
        else:
            top_sql = """
                        select a.*
                        from
                          (select inst_id as inst_id,
                                row_number() over (partition by inst_id order by cpu_time desc) as rc,
                                row_number() over (partition by inst_id order by disk_reads desc) as rr,
                                row_number() over (partition by inst_id order by elapsed_Time desc) as rt,
                                row_number() over (partition by inst_id order by BUFFER_GETS desc) as bf,
                                PARSING_SCHEMA_NAME db_USER,
                                sql_id,
                                round(cpu_time/1e6) as cpu_s ,
                                round(elapsed_Time/1e6) as elap_s ,
                                round((elapsed_Time - cpu_time)/1e6) wait_s,
                                trunc((elapsed_Time - cpu_time)*100/greatest(elapsed_Time,1),1)||'%' as "wait/elap",
                                executions as execs,
                                round(elapsed_Time/(executions+1)/1e6,2) ela_Pe,
                                buffer_gets as tot_bufs,
                                round(buffer_gets/greatest(executions,1),1) as avg_buf,
                                disk_reads as reads,
                                round(USER_IO_WAIT_TIME/1e6) as IOwait_s,
                                (select distinct name from gv$database) as db_name,
                                (select distinct dbid from gv$database) as dbid,
                                plan_hash_value
                                from gv$sqlarea t
                                where PARSING_SCHEMA_NAME not in ('SYS','SYSTEM','DBSNMP','DMUSER','MDSYS','ODMRSYS')
                            ) a
                        where rc <=5 or rr<=5 or rt<=5 or bf<=5 
                        order by inst_id,rc
                        """


        cursor = conn.cursor()
        cursor.execute(top_sql)
        top_sql_data = cursor.fetchall()


        result = []

        for j in range(len(top_sql_data)):
            result.append((gath_time_,top_sql_data[j][17],top_sql_data[j][18],top_sql_data[j][0],top_sql_data[j][5],top_sql_data[j][6],top_sql_data[j][19],top_sql_data[j][7],top_sql_data[j][8],top_sql_data[j][9],top_sql_data[j][11],top_sql_data[j][13],top_sql_data[j][15]))

        cursor.prepare(
                "insert into top_sql_data(GATH_TIME,DB_NAME,dbid,INST_ID,PARSING_SCHEMA_NAME,SQL_ID,plan_hash_value,cpu_s,elap_s,wait_s,EXECS,BUFFERS,DISK_READS) values(:1,:2,:3,:4,:5,:6,:7,:8,:9,:10,:11,:12,:13)")

        #print(result)
        cursor.executemany(None, result)
        cursor.callproc('ZJ_PRE_DEAL_SQLDATA', [gath_time_,'DMTEST', top_sql_data[j][18],top_sql_data[j][0]])
        #
        conn.commit()
        cursor.close()
        conn.close()
        #contert_to_json(top_sql_data,top_ash_data)
        #logger.info(top_sql_data)
        #print(top_sql_data)

    except Exception as msg:
        logger.info(msg)

@app.task(queue='for_task_sql')
def begin_detect_outlier(gath_time):
    gath_time_ = gath_time

    print("Detect Anomy SQL Begin At  %s" % gath_time_)
    logger = top_log()
    try:
        task_list=[DETECT_BUFFER_MODEL.si(gath_time_),DETECT_CPU_MODEL.si(gath_time_),DETECT_DISK_MODEL.si(gath_time_),DETECT_ELAP_MODEL.si(gath_time_),DETECT_EXEC_MODEL.si(gath_time_)]
        total_group = group(task_list)
        #add_chord_sig =group([chord(group(task_list)(),add.si(5,5))]).apply_async()
        #total_result=add_chord_sig.apply_async()
        add_chord_sig = chord(total_group, add.si(5, 5))
        # total_result = total_group.delay()
        #total_result = (total_group | add.si(2,3))().get()
        return add_chord_sig.delay()

    except Exception as msg:
        logger.info(msg)

@app.task(queue='for_task_sql')
def DETECT_BUFFER_MODEL(gath_time):
    # gath_time_= datetime.datetime.strptime(gath_time.encode("utf-8"), "%Y-%m-%d %H:%M")
    # print("buffer gath_time_ %s" %gath_time_)
    logger = top_log()
    sub_buffer_task_list=[]
    try:
        for i in range(1):
            sub_buffer_task_list.append(ZJ_RUN_DETECT_BUFFER_MODEL.s('DMTEST',390132054,1,gath_time,i))
        print ('Detect Buffer Outlier Total Task %s: '%sub_buffer_task_list)
        sub_detect_buffer = group(sub_buffer_task_list)
        sub_buffer_result = sub_detect_buffer.delay()

    except Exception as msg:
        logger.info(msg)

@app.task(queue='for_task_sql')
def ZJ_RUN_DETECT_BUFFER_MODEL(db_name_ ,dbid_ ,inst_id_ ,gath_time,i):
    gath_time_= datetime.datetime.strptime(gath_time.encode('utf-8').decode("utf-8"), "%Y-%m-%d %H:%M")
    print("Detect Buffer Outlier Sub Task No is: %s, Time is %s"%(str(i),gath_time_))
    logger = top_log()
    try:
        conn = database_method.initial_connect('dmuser', 'dmuser', 'dmtest')
        conn = conn.create_conn()
        cursor = conn.cursor()
        cursor.callproc('ZJ_RUN_DETECT_BUFFER_MODEL', [db_name_, dbid_,inst_id_,gath_time_])
        conn.commit()
        cursor.close()
        conn.close()
    except Exception as msg:
        logger.info(msg)

@app.task(queue='for_task_sql')
def DETECT_CPU_MODEL(gath_time):
    # gath_time_= datetime.datetime.strptime(gath_time.encode("utf-8"), "%Y-%m-%d %H:%M")
    # print("buffer gath_time_ %s" %gath_time_)
    logger = top_log()
    sub_cpu_task_list=[]
    try:
        for i in range(1):
            sub_cpu_task_list.append(ZJ_RUN_DETECT_CPU_MODEL.s('DMTEST',390132054,1,gath_time,i))
        print('Detect Cpu Outlier Total Task %s: ' %sub_cpu_task_list)
        sub_detect_cpu = group(sub_cpu_task_list)
        sub_cpu_result = sub_detect_cpu.delay()
        # logger.info('detect cpu outlier task status %s:'%sub_cpu_result.status())
    except Exception as msg:
        logger.info(msg)

@app.task(queue='for_task_sql')
def ZJ_RUN_DETECT_CPU_MODEL(db_name_ ,dbid_ ,inst_id_ ,gath_time,i):
    gath_time_= datetime.datetime.strptime(gath_time.encode('utf-8').decode("utf-8"), "%Y-%m-%d %H:%M")
    print("Detect Cpu Outlier Sub Task No is: %s, Time is %s" %(str(i),gath_time_))
    logger = top_log()
    try:
        conn = database_method.initial_connect('dmuser', 'dmuser', 'dmtest')
        conn = conn.create_conn()
        cursor = conn.cursor()
        cursor.callproc('ZJ_RUN_DETECT_CPU_MODEL', [db_name_, dbid_,inst_id_,gath_time_])
        conn.commit()
        cursor.close()
        conn.close()
    except Exception as msg:
        logger.info(msg)


@app.task(queue='for_task_sql')
def DETECT_DISK_MODEL(gath_time):
    # gath_time_= datetime.datetime.strptime(gath_time.encode("utf-8"), "%Y-%m-%d %H:%M")
    # print("buffer gath_time_ %s" %gath_time_)
    logger = top_log()
    sub_disk_task_list=[]
    try:
        for i in range(1):
            sub_disk_task_list.append(ZJ_RUN_DETECT_DISK_MODEL.s('DMTEST',390132054,1,gath_time,i))
        print('Detect Disk Outlier Total Task %s: ' % sub_disk_task_list)
        sub_detect_disk = group(sub_disk_task_list)
        sub_disk_result = sub_detect_disk.delay()
        # logger.info('detect cpu outlier task status %s:'%sub_cpu_result.status())
    except Exception as msg:
        logger.info(msg)

@app.task(queue='for_task_sql')
def ZJ_RUN_DETECT_DISK_MODEL(db_name_ ,dbid_ ,inst_id_ ,gath_time,i):
    gath_time_= datetime.datetime.strptime(gath_time.encode('utf-8').decode("utf-8"), "%Y-%m-%d %H:%M")
    print("Detect Disk Outlier Sub Task No is: %s, Time is %s " %(str(i),gath_time_))
    logger = top_log()
    try:
        conn = database_method.initial_connect('dmuser', 'dmuser', 'dmtest')
        conn = conn.create_conn()
        cursor = conn.cursor()
        cursor.callproc('ZJ_RUN_DETECT_DISK_MODEL', [db_name_, dbid_,inst_id_,gath_time_])
        conn.commit()
        cursor.close()
        conn.close()
    except Exception as msg:
        logger.info(msg)

@app.task(queue='for_task_sql')
def DETECT_ELAP_MODEL(gath_time):
    # gath_time_= datetime.datetime.strptime(gath_time.encode("utf-8"), "%Y-%m-%d %H:%M")
    # print("buffer gath_time_ %s" %gath_time_)
    logger = top_log()
    sub_elap_task_list=[]
    try:
        for i in range(1):
            sub_elap_task_list.append(ZJ_RUN_DETECT_ELAP_MODEL.s('DMTEST',390132054,1,gath_time,i))
        print('Detect Elap Outlier Total Task %s: ' % sub_elap_task_list)
        sub_detect_elap = group(sub_elap_task_list)
        sub_elap_result = sub_detect_elap.delay()
        # logger.info('detect cpu outlier task status %s:'%sub_cpu_result.status())
    except Exception as msg:
        logger.info(msg)

@app.task(queue='for_task_sql')
def ZJ_RUN_DETECT_ELAP_MODEL(db_name_ ,dbid_ ,inst_id_ ,gath_time,i):
    gath_time_= datetime.datetime.strptime(gath_time.encode('utf-8').decode("utf-8"), "%Y-%m-%d %H:%M")
    print("Detect Elap Outlier Sub Task No is: %s, Time is %s " % (str(i), gath_time_))
    logger = top_log()
    try:
        conn = database_method.initial_connect('dmuser', 'dmuser', 'dmtest')
        conn = conn.create_conn()
        cursor = conn.cursor()
        cursor.callproc('ZJ_RUN_DETECT_ELAP_MODEL', [db_name_, dbid_,inst_id_,gath_time_])
        conn.commit()
        cursor.close()
        conn.close()
    except Exception as msg:
        logger.info(msg)

@app.task(queue='for_task_sql')
def DETECT_EXEC_MODEL(gath_time):
    # gath_time_= datetime.datetime.strptime(gath_time.encode("utf-8"), "%Y-%m-%d %H:%M")
    # print("buffer gath_time_ %s" %gath_time_)
    logger = top_log()
    sub_exec_task_list=[]
    try:
        for i in range(1):
            sub_exec_task_list.append(ZJ_RUN_DETECT_EXEC_MODEL.s('DMTEST',390132054,1,gath_time,i))
        print('Detect Exec Outlier Total Task %s: ' % sub_exec_task_list)
        sub_detect_exec = group(sub_exec_task_list)
        sub_exec_result = sub_detect_exec.delay()
        # logger.info('detect cpu outlier task status %s:'%sub_cpu_result.status())
    except Exception as msg:
        logger.info(msg)

@app.task(queue='for_task_sql')
def ZJ_RUN_DETECT_EXEC_MODEL(db_name_ ,dbid_ ,inst_id_ ,gath_time,i):
    gath_time_= datetime.datetime.strptime(gath_time.encode('utf-8').decode("utf-8"), "%Y-%m-%d %H:%M")
    print("Detect Exec Outlier Sub Task No is: %s, Time is %s " % (str(i), gath_time_))
    logger = top_log()
    try:
        conn = database_method.initial_connect('dmuser', 'dmuser', 'dmtest')
        conn = conn.create_conn()
        cursor = conn.cursor()
        cursor.callproc('ZJ_RUN_DETECT_EXEC_MODEL', [db_name_, dbid_,inst_id_,gath_time_])
        conn.commit()
        cursor.close()
        conn.close()
    except Exception as msg:
        logger.info(msg)
