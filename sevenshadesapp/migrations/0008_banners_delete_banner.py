# Generated by Django 5.0 on 2024-02-27 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sevenshadesapp', '0007_adminlogin'),
    ]

    operations = [
        migrations.CreateModel(
            name='Banners',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bannerdescription', models.CharField(default='', max_length=500)),
                ('icon', models.TextField(default='')),
            ],
        ),
        migrations.DeleteModel(
            name='Banner',
        ),
    ]
