# Generated by Django 3.1.4 on 2021-07-09 18:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('guides', '0002_auto_20210709_1059'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='guidespdf',
            name='points',
        ),
        migrations.AddField(
            model_name='guidespdf',
            name='points',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='guides.guidespoint'),
            preserve_default=False,
        ),
    ]