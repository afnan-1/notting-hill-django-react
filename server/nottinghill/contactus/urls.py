from os import name
from rest_framework import routers
from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.contact_us,name="contact-us"),
    path('sendingemail/',views.send_email,name="sendingemail")
]