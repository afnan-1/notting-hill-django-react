from django.contrib import admin
from .models import Contact, Visa
# Register your models here.

class ContactAdmin(admin.ModelAdmin):
    search_fields=('first_name','last_name')
    list_display=('first_name','last_name','email','created_at')
    ordering=('-created_at',)
admin.site.register(Contact,ContactAdmin)
admin.site.register(Visa)
admin.site.site_header = "NHL"
admin.site.site_title = "NHL Admin panel"
admin.site.index_title = "Notting Hill Law"
# admin.site.unregister()