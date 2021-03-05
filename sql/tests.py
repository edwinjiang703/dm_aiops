from django.test import TestCase

# Create your tests here.

from sql import tasks
re1 = add.delay(5,6)
print(re1.result)

