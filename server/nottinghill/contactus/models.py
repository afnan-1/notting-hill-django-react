from django.db import models

# Create your models here.
class Contact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
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

    class Meta:
        verbose_name = 'User Message'
        verbose_name_plural = "Contact Us"
    def __str__(self):
        return self.first_name+self.last_name
