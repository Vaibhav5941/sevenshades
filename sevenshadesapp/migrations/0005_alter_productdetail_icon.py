# Generated by Django 5.0 on 2024-02-20 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sevenshadesapp', '0004_productdetail'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productdetail',
            name='icon',
            field=models.TextField(default=''),
        ),
    ]
