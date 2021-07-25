from asyncio.tasks import create_task
from .models import Contact, Visa
from rest_framework import viewsets
# from .serializers import ContactSerializer
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from asgiref.sync import sync_to_async
import asyncio

# @sync_to_async


@api_view(['POST'])
def send_email(request):
    data = request.data
    send_mail(f'Visa Application/{data["name"].title()}',
              f'{data["message"]}',
              'ballypythapa@gmail.com',
              ['roman.nadeem@gmail.com'],
              fail_silently=False)
    return Response("Email Sended")


@api_view(['POST', ])
def contact_us(request):
    data = request.data
    visa = data['visa']
    del data['visa']
    try:
        contact = Contact(**data)
        contact.save()
        for i in visa:
            if i == "work_visa":
                i = 'skilled work visa'
            try:
                visa = Visa.objects.get(name__contains=i)
                contact.visa.add(visa)
            except:
                print('not found name')
        return Response("contact added", status=200)
    except:
        message="Server error"
        return Response({message:message},status=400)
