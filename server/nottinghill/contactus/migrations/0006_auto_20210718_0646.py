# Generated by Django 3.1.4 on 2021-07-18 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactus', '0005_auto_20210717_1008'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='visa',
            field=models.ManyToManyField(to='contactus.Visa'),
        ),
    ]
