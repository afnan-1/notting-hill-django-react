# Generated by Django 3.1.4 on 2021-08-16 10:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resources', '0005_auto_20210816_1010'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guidesresources',
            name='heading_image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='guidesresources',
            name='thumbnail_image',
            field=models.ImageField(blank=True, null=True, upload_to='guide_thumbnail'),
        ),
    ]
