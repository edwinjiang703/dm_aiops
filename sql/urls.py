#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/1/14
# @Author  : Edwin
# @Version : Python 3.6
# @File    : urls.py

from django.conf.urls import url,include
from django.contrib import admin
from sql import views

urlpatterns = [
    #FBV Function base view
    url(r'^home/', views.home),
    url(r'^anodetect/', views.home),
    url(r'^anomy_sql/', views.anomy_sql),
    url(r'^add_database/', views.add_database,name='addinfo'),
    url(r'^mod_database/', views.mod_database),
]