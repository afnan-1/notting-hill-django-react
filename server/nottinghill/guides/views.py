from .serializer import GuidesFormSerializer, GuidesSerializer
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import GuidesForm, GuidesPdf
# Create your views here.
@api_view()
def get_guides(request):
    guides = GuidesPdf.objects.all()
    serializer = GuidesSerializer(guides,many=True,context={'request': request})
    return Response(serializer.data)


@api_view()
def get_guide(request,id):
    guide = GuidesPdf.objects.get(id=id)
    serializer = GuidesSerializer(guide,many=False,context={'request': request})
    return Response(serializer.data)


@api_view(['POST',])
def add_guide_form(request):
    data = request.data
    serializer = GuidesFormSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response("form data saved")
    return Response("Error")