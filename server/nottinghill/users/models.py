from django.db import models
from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail  
from django.contrib.sites.shortcuts import get_current_site
from django.utils.functional import SimpleLazyObject
from nottinghill.settings import DOMAIN_NAME
# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _

from .managers import CustomUserManager


class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)


    def __str__(self):
        return self.email





@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    email_plaintext_message = "http://{}{}?token={}".format(DOMAIN_NAME,reverse('password_reset:reset-password-request'), reset_password_token.key)
    send_mail(
        # title:
        "Password Reset for {title}".format(title="Some website title"),
        # message:
        email_plaintext_message,
        # from:
        "ballypythapa@gmail.com",
        # to:
        [reset_password_token.user.email]
    )