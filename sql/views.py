from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.shortcuts import redirect
from django.apps import apps
from django.contrib.auth.decorators import login_required
from django.urls import reverse, reverse_lazy
from django.template import loader
import os,time,datetime,random
import logging
from pyecharts import Line,Bar,Timeline,Pie
from sql import database_method
from sql.tasks import add


# Create your views here.

REMOTE_HOST = '/static/assets/js'
load_profile_per_hour = []

def post(request):
    result=add.delay(2,3)


def home(request):
    # return render(request,'home.html')
    # if request.method == 'POST':
    #     username = request.POST.get('username',None)
    #     age = request.POST.get("age",None)
    #     gender = request.POST.get("gender",None)
    #     usergroup_id = request.POST.get("group",None)
    #     models.UserInfo.objects.create(username=username, age=age, gender=gender,usergroup_id=usergroup_id)
    # USER_LIST = list(models.UserInfo.objects.all())
    # return render(request,"./node_modules/gentelella/production/anom_total.html",{"userlist":USER_LIST})

    conn = database_method.initial_connect('dmuser', 'dmuser', 'dmtest')
    conn = conn.create_conn()
    cursor = conn.cursor()

    cpu_outlier_result = """
        select "TIME",
    "SNAP_ID", 
    "DB_CPU", 
    db_id,
    '/ora_dual/load_profile_trend/?snapid='||SNAP_ID||'&dbid='||db_id
    from (
    SELECT 
    "TIME",
    "SNAP_ID", 
    "DB_CPU", 
    db_id,
    PREDICTION_PROBABILITY(dmuser.ANOM_SVM_1_6 USING *) ANOM_SVM_1_6_PROB,
    PREDICTION(dmuser.ANOM_SVM_1_6 USING *) ANOM_SVM_1_6_PRED
    FROM dmuser.stat_all_pivot_data) where ANOM_SVM_1_6_PRED=1 and rownum=1
        """

    sql_outlier_result = """
                               select * from (
                                   select type
                                   from topsql_all_data_his_view
                                )
                                pivot 
                                (
                                   count(*)
                                   for type in ('CPU Time' as "CPU_TIME",'Elapse Time' as "ELAPSE_TIME",'Buffer Reads' as "BUFFER_READS",'Physical Reads' as "PHYSICAL_READS",'Executions' as "EXECUTIONS")
                                )
    """

    cpu_result = """
            select db_cpu,time from dmuser.stat_all_pivot_data
            """

    # 执行异常探测
    cursor.callproc('dmuser.cpu_outlier_apply_model')

    # 执行异常分析
    cursor.execute(cpu_outlier_result)
    data_result_ = cursor.fetchall()
    data_result = list(data_result_)

    cursor.execute(sql_outlier_result)
    sql_result_ = cursor.fetchall()
    sql_result = list(sql_result_)
    outlier_sql = []
    for idx in range(len(sql_result)):
        outlier_sql.append({'CPU':sql_result[idx][0],'ELA':sql_result[idx][1],'BUFFER':sql_result[idx][2],'READ':sql_result[idx][3],'EXE':sql_result[idx][4]})

    # 提取异常原因
    reasons = []
    for idx in range(len(data_result)):

        url = []
        #         reason_sql = """
        #         select  extractValue(value(reason_name),('//Attribute/@name'))
        # from
        # (
        # select FEATURE_DETAILS(dmuser.feat_pca_1_6, 1, 10 USING *) data
        # from dmuser.stat_all_pivot_data
        # where snap_id =
        #         """ + str(data_result[idx][1]) + """  ) t,TABLE(XMLSequence(Extract(t.data,'//Attribute'))) reason_name where rownum<4
        #         """

        reason_sql = """
                   select stat_name from (
    select * from DBA_HIST_SYS_TIME_MODEL where snap_id=""" + str(data_result[idx][1]) + """ and stat_name not in ('DB time','DB CPU')
    order by value desc) where rownum < 4
                          """

        cursor.execute(reason_sql)
        reason_result_ = cursor.fetchall()
        for reaon_idx in range(len(reason_result_)):
            url.append(
                data_result[idx][4] + "&reason=" + str(reason_result_[reaon_idx]).upper().replace(' ', '_').replace('(',
                                                                                                                    '').replace(
                    ')', '').replace(',', '').replace('[', '').replace(']', '').replace('''''', ''))
            # url.append(data_result[idx][4] + "&reason=" + str(reason_result_[reaon_idx]))
        reasons.append(
            {"TIME": data_result[idx][0], "snap_id": data_result[idx][1], "DB_CPU": data_result[idx][2], "URL": url,
             "reason": reason_result_})

    cursor.execute(cpu_result)
    cpu_all_result_ = cursor.fetchall()
    cpu_all_result = list(cpu_all_result_)

    normal = []
    normal_tiem = []
    outlier = []
    outlier_time = []
    timeid = []

    for idx_1 in range(len(cpu_all_result)):
        # outlier.append({'time':cpu_all_result[idx_1][0],'ANOM_SVM_1_6_PROB':cpu_all_result[idx_1][3]})
        outlier.append(cpu_all_result[idx_1][0])
        outlier_time.append(cpu_all_result[idx_1][1])
        # else:
        #     #normal.append({'time':cpu_all_result[idx_1][0],'ANOM_SVM_1_6_PROB':cpu_all_result[idx_1][3]})
        #     normal.append( cpu_all_result[idx_1][3])
        #     normal_tiem.append(cpu_all_result[idx_1][0])

    template = loader.get_template('./node_modules/gentelella/production/anom_total.html')
    timeline = Timeline(is_auto_play=True, timeline_bottom=0)

    cpu_line = Line(title_pos='center')


    # SQL 执行计划
    plan_item=[]
    operation=[]
    option=[]
    object_name=[]
    cost=[]
    card=[]
    cpucost=[]
    iocost=[]
    sql_plan_sql = """
              select OPERATION,OPTIONS,OBJECT_NAME,COST,CARDINALITY,CPU_COST,IO_COST from plan_result
               """

    cursor.execute(sql_plan_sql)
    sql_plan_result_ = cursor.fetchall()
    for plan_idx in range(len(sql_plan_result_)):
        # plan_item.append({"operation":str(sql_plan_result_[plan_idx][0]).replace("'",'').replace('(','').replace(')', ''),
        #                   "option":str(sql_plan_result_[plan_idx][1]).replace("'",'').replace('(','').replace(')', ''),
        #                   "object_name":str(sql_plan_result_[plan_idx][2]).replace("'",'').replace('(','').replace(')', ''),
        #                   "cost":str(sql_plan_result_[plan_idx][3]).replace("'",'').replace('(','').replace(')', ''),
        #                   "CARDINALITY":str(sql_plan_result_[plan_idx][4]).replace("'",'').replace('(','').replace(')', ''),
        #                   "cpu_cost":str(sql_plan_result_[plan_idx][5]).replace("'",'').replace('(','').replace(')', ''),
        #                   "io_cost":str(sql_plan_result_[plan_idx][3]).replace("'",'').replace('(','').replace(')', '')})
        operation.append(str(sql_plan_result_[plan_idx][0]).replace("'",'').replace('(','').replace(')', ''))
        option.append(str(sql_plan_result_[plan_idx][1]).replace("'",'').replace('(','').replace(')', ''))
        object_name.append(str(sql_plan_result_[plan_idx][2]).replace("'", '').replace('(', '').replace(')', ''))
        cost.append(str(sql_plan_result_[plan_idx][3]).replace("'", '').replace('(', '').replace(')', ''))
        card.append(str(sql_plan_result_[plan_idx][4]).replace("'", '').replace('(', '').replace(')', ''))
        cpucost.append(str(sql_plan_result_[plan_idx][5]).replace("'", '').replace('(', '').replace(')', ''))
        iocost.append(str(sql_plan_result_[plan_idx][6]).replace("'", '').replace('(', '').replace(')', ''))
    plan_item.append({"operation":operation,"option":option,"objectname":object_name,"cost":cost,"card":card,"cpucost":cpucost,"iocost":iocost})

    cpu_line.add(
        "DB_CPU",
        outlier_time,
        outlier,
        is_smooth=True,
        mark_point=["max", "min"],
        mark_line=["average"]
    )

    context = dict(
        # title = [],
        cpu_line=cpu_line.render_embed(),
        data_result=reasons,
        sql_plan_result=plan_item,
        sql_result=outlier_sql,
        # metric_data = load_profile_per_hour,
        myechart=timeline.render_embed(),
        # host=DEFAULT_HOST,#这句改为下面这句
        host=REMOTE_HOST,  # <-----修改为这个
        script_list=timeline.get_js_dependencies()
    )
    return HttpResponse(template.render(context, request))

    # return render(request, "./node_modules/gentelella/production/sel_cpuoutlier_data.html", {'data_result': data_result})
    cursor.close()

def login(request):
    # f = open('templates/login.html','r',encoding='utf-8')
    # logstr = f.read()
    # return HttpResponse(logstr)

    error_msg =''
    if request.method == 'POST':
        username = request.POST.get('username',None)
        password = request.POST.get('passwd',None)
        print(username)
        if username == 'root' and password == '12345':
            return redirect("/ora_dual/home")
        else:
            error_msg ="username or password is not correct"