from django.urls import path
from .views import *
urlpatterns = [
    path('', register_user, name="register-user"),
    path('login/', MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
]
