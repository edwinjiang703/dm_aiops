from __future__ import absolute_import,unicode_literals
from celery import Celery
from celery.schedules import crontab
from datetime import datetime,timedelta
from django.conf import settings
import os


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'oraiops.settings')

app = Celery('oraiops',broker='redis://127.0.0.1',backend='redis://127.0.0.1',include=['sql.tasks'])
app.config_from_object('django.conf:settings',namespace='CELERY')
app.autodiscover_tasks(settings.INSTALLED_APPS, related_name='tasks')
app.conf.update(
    CELERYBEAT_SCHEDULE = {
        'sum-task': {
            'task': 'sql.tasks.begin',
            'schedule':  timedelta(seconds=300)
        }
    }
)
#  'schedule': crontab(hour=4, minute=30, day_of_week=1),
# if __name__ == '__main__':
#     app.start()

@app.task(bind=True)
def debug_task(self):
    print('Request: {0!r}'.format(self.request))