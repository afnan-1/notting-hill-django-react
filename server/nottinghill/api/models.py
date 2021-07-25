from django.db import models
from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail  
from django.contrib.sites.shortcuts import get_current_site
from django.utils.functional import SimpleLazyObject
from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
import datetime
from .managers import CustomUserManager
# Create your models here.



class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    USERNAME_FIELD = 'email'
    name = models.CharField(max_length=20)
    date_of_birth = models.DateField(_("Date of birth"),null=True,blank=True)
    REQUIRED_FIELDS = []

    objects = CustomUserManager()



    def __str__(self):
        return self.email





@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    email_plaintext_message = "{}/{}?token={}".format(settings.DOMAIN_NAME,'#users/password_reset/', reset_password_token.key)
    send_mail(
        # title:
        "Password Reset for {title}".format(title="Notting Hill Law"),
        # message:
        email_plaintext_message,
        # from:
        settings.EMAIL_HOST_USER,
        # to:
        [reset_password_token.user.email]
    )