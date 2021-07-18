from django.contrib import admin
from .models import *
# Register your models here.

class PointsInline(admin.TabularInline):
    model = GuidesPoint

class GuideAdmin(admin.ModelAdmin):
    inlines = [
        PointsInline,
    ]

admin.site.register(GuidesForm)
admin.site.register(GuidesPdf,GuideAdmin)