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
from django.core.mail import EmailMultiAlternatives
from django.template import RequestContext
from django.template.loader import render_to_string
from api.contact.models import NottingHillLawLogo
from django.utils.html import strip_tags
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

    logo = NottingHillLawLogo.objects.all()[0]
    logo = settings.BACKEND_DOMAIN + logo.logo.url
    html_content = render_to_string(
        "reset_password_email.html",
        {
            "verification_link":"{}/{}?token={}".format(settings.DOMAIN_NAME,'#users/password_reset/', reset_password_token.key)
        },
    )
    text_context = strip_tags(html_content)
    email = EmailMultiAlternatives(
        f'Password-Reset-Link for Notting Hill Law',
        text_context,
        settings.EMAIL_HOST_USER,
        [reset_password_token.user.email]
    )
    email.attach_alternative(html_content, "text/html")
    email.send()