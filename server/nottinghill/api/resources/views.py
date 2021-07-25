from re import M
from .serializers import GuidesFormSerializer, GuidesSerializer
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import GuidesForm, GuidesPdf
# Create your views here.
@api_view(['GET'])
def get_guides(request):
    guides = GuidesPdf.objects.all()
    serializer = GuidesSerializer(guides,many=True,context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def get_guide(request,id):
    guide = GuidesPdf.objects.get(id=id)
    serializer = GuidesSerializer(guide,many=False,context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def get_temp_guide(request):
    guide = GuidesPdf.objects.order_by('?')
    try:
        guide = guide[0]
        serializer = GuidesSerializer(guide,many=False,context={'request': request})
        return Response(serializer.data)
    except:
        message = {'detail':'There is no Temporary Guide'}
        return Response(message,status=400)
    


@api_view(['POST',])
def add_guide_form(request):
    data = request.data
    serializer = GuidesFormSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save(user=request.user)
    return Response(serializer.data)