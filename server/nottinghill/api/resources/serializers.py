
from rest_framework import serializers
from .models import GuidesForm,GuidesPoint, GuidesResources


class GuidesPointSerializer(serializers.ModelSerializer):
    class Meta:
        model= GuidesPoint
        fields='__all__'


class GuidesSerializer(serializers.ModelSerializer):
    guide = GuidesPointSerializer(many=True)
    class Meta:
        model = GuidesResources
        fields = '__all__'
    

class GuidesFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = GuidesForm
        fields = "__all__"