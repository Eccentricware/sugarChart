# Generated by Django 3.2.7 on 2021-11-06 22:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_details', '0006_userdetail_default_timespan'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdetail',
            name='show_24_hours',
            field=models.BooleanField(default=False),
        ),
    ]
