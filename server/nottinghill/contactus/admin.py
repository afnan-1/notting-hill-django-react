from django.contrib import admin
from .models import Contact
from django.contrib import auth
# Register your models here.

class ContactAdmin(admin.ModelAdmin):
    search_fields=('name',)
    list_display=('name','email','created_at')
    ordering=('-created_at',)
admin.site.register(Contact,ContactAdmin)
admin.site.unregister(auth.models.User)
admin.site.unregister(auth.models.Group)
# admin.site.unregister()