# Generated by Django 3.1.4 on 2021-07-18 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('guides', '0009_auto_20210718_0737'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guidesform',
            name='buisness_email',
            field=models.CharField(max_length=100),
        ),
    ]