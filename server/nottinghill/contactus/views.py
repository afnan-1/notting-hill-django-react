from .models import Contact
from rest_framework import viewsets
from .serializers import ContactSerializer
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

def email_send(name,email,telephone,message):
    subject = 'Thank you for Contact us to our site'
    message = f'Sender Name: {name}\nMessage is: {message}.\nSender Email: {email}.\nSender Phone#: {telephone}'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email,]
    send_mail( subject, message, email_from, recipient_list )
    return Response({'message':"Send to email",'success':True})
@api_view(['POST',])
def contact_us(request):
    first_name = request.data.get('firstname')
    last_name = request.data.get('lastname')
    country = request.data.get('country')
    city = request.data.get('city')
    student = request.data.get('student')
    spouse = request.data.get('spouse')
    temporarywork = request.data.get('temporarywork')
    skillwork = request.data.get('skillwork')
    innovator = request.data.get('innovator')
    investor = request.data.get('investor')
    startup = request.data.get('startup')
    euss = request.data.get('euss')
    hongkong = request.data.get('hongkong')
    other = request.data.get('other')
    email = request.data.get('email')
    telephone = request.data.get('telephone')
    message = request.data.get('message')
    dd = request.data.get('dd')
    mm = request.data.get('mm')
    yyyy = request.data.get('yyyy')
    ticketname = request.data.get('ticketname')
    ticketdesc = request.data.get('ticketdesc')
    time = request.data.get('time')
    visa=''
    text = 'Ask For: '
    if student=='true':
        visa += 'Student Visa, '
    if spouse=='true':
        visa += 'Spouse Visa, '
    if temporarywork=='true':
        visa += 'Temporary Work Visa, '
    if skillwork =='true':
        visa += 'Skill Work Visa, '
    if innovator =='true':
        visa += 'Innovator Visa, '
    if investor=='true':
        visa += 'Investor Visa, '
    if startup=='true':
        visa += 'Start-up Visa, '
    if euss=='true':
        visa += 'EUSS Visa, '
    if hongkong=='true':
        visa += 'Hong Kong Visa, '
    if other=='true':
        visa += 'Other '
    visa = text + visa
    name = first_name + ' ' + last_name
    time = 'Suitable Time for call is :', time
    date = f'Date for call :{yyyy}/{mm}/{dd}'
    queryset = Contact(name=name,date=date,email=email,telephone=telephone,message=message,visa=visa,ticket_desc=ticketdesc,ticket_name=ticketname,time=time,country=country,city=city)
    queryset.save()
    # email_send(name,email,telephone,message)
    return Response({"message": "Contact Created", "success": True})
    