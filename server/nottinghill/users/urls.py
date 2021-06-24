from django.urls import path,include
from .views import *
urlpatterns = [
    path('', register_user, name="register-user"),
    path('login/', MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),

]
