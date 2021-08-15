from django.db import models

# Create your models here.
class GuidesResources(models.Model):
    thumbnail_title = models.CharField(max_length=200)
    thumbnail_image = models.ImageField(null=True,blank=True,upload_to="guide_thumbnail")
    heading = models.CharField(max_length=500)
    heading_outline_paragraph = models.TextField()
    guide_pdf = models.FileField(upload_to="guide_pdf")
    heading_image = models.ImageField(null=True, blank=True,default='/placeholder.png')
    def __str__(self):
        return self.thumbnail_title

class GuidesPoint(models.Model):
    guide = models.ForeignKey(GuidesResources,on_delete=models.CASCADE,related_name='guide')
    point = models.CharField(max_length=200)

    def __str__(self):
        return self.guide.thumbnail_title


class GuidesForm(models.Model):
    user = models.ForeignKey('api.customuser',on_delete=models.SET_NULL,null=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    buisness_email = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)
    website_url = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    employes = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.buisness_email