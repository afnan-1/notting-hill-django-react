from .models import Contact, NottingHillLawLogo
from rest_framework import viewsets
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template import RequestContext
from django.template.loader import render_to_string

from django.utils.html import strip_tags


@api_view(["POST"])
def send_email(request):
    data = request.data
    logo = NottingHillLawLogo.objects.all()[0]
    logo = settings.BACKEND_DOMAIN + logo.logo.url
    context_instance = RequestContext(request)
    html_content = render_to_string(
        "contact_email.html",
        {
            "message": data["message"],
            "name": data["name"],
            "logo": logo,
            "visa_application": data["visa"],
            "email":data["email"],
            "phone":data["phone"]
        },
        request=request,
    )
    text_context = strip_tags(html_content)
    email = EmailMultiAlternatives(
        f'VisaApplication/{data["name"].title()}',
        text_context,
        "ballypythapa@gmail.com",
        ["roman.nadeem@gmail.com"],
    )
    email.attach_alternative(html_content, "text/html")
    email.send()
    return Response("Email Sended")


@api_view(["POST"])
def contact_us(request):
    data = request.data
    try:
        contact = Contact(**data)
        contact.save()
        return Response("contact added", status=200)
    except:
        message = "Server error"
        return Response({message: message}, status=400)
