from django.db import models

# Create your models here.
class GuidesPdf(models.Model):
    pdf = models.FileField()
    title = models.CharField(max_length=200)
    heading = models.CharField(max_length=500)
    heading_outline_paragraph = models.TextField()
    pdf_image = models.ImageField(null=True, blank=True,default='/placeholder.png')
    guide_image = models.ImageField(null=True,blank=True)
    def __str__(self):
        return self.title

class GuidesPoint(models.Model):
    guide = models.ForeignKey(GuidesPdf,on_delete=models.CASCADE,related_name='guide')
    point = models.CharField(max_length=200)

    def __str__(self):
        return self.guide.title


class GuidesForm(models.Model):
    user = models.ForeignKey('users.customuser',on_delete=models.SET_NULL,null=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    buisness_email = models.EmailField()
    company_name = models.CharField(max_length=100)
    website_url = models.URLField()
    phone_number = models.CharField(max_length=20)
    employes = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.buisness_email