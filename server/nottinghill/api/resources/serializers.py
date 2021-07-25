from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import GuidesForm, GuidesPdf,GuidesPoint


class GuidesPointSerializer(serializers.ModelSerializer):
    class Meta:
        model= GuidesPoint
        fields='__all__'


class GuidesSerializer(serializers.ModelSerializer):
    guide = GuidesPointSerializer(many=True)
    class Meta:
        model = GuidesPdf
        fields = ['title','guide','id','heading','heading_outline_paragraph','pdf','pdf_image','guide_image']
    

class GuidesFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = GuidesForm
        fields = "__all__"