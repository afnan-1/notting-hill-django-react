# Generated by Django 3.1.4 on 2021-07-18 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('guides', '0007_guidesform_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guidesform',
            name='website_url',
            field=models.CharField(max_length=100),
        ),
    ]
