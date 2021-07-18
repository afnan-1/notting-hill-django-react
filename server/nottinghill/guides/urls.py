from django.urls import path
from .views import *

urlpatterns = [
    path('pdf/',get_guides),
    path('pdf/<int:id>/',get_guide),
    path('addguideform/',add_guide_form)
]
