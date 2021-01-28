from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=50)
    telephone = models.CharField(max_length=50)
    message = models.TextField(max_length=5000)
    created_at = models.DateTimeField(auto_now_add=True)
    visa = models.CharField(max_length=50, blank=True, null=True)
    date = models.CharField(max_length=500)
    ticket_name = models.CharField(max_length=500,)
    ticket_desc = models.CharField(max_length=1000)
    time = models.CharField(max_length=50)
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    def __str__(self):
        return self.name
