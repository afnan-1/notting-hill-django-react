# Generated by Django 3.1.4 on 2021-07-09 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('guides', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='guidespdf',
            name='points',
        ),
        migrations.AddField(
            model_name='guidespdf',
            name='points',
            field=models.ManyToManyField(to='guides.GuidesPoint'),
        ),
    ]
