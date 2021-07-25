from django.urls import path,include
from .views import *
urlpatterns = [
    path('users/register/', register_user, name="register-user"),
    path('users/login/', MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('users/password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    path('contactus/', include('api.contact.urls')),
    path('guides/', include('api.resources.urls')),

]
