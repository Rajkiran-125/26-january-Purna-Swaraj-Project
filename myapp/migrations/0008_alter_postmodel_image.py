# Generated by Django 4.1.3 on 2023-01-16 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0007_postmodel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postmodel',
            name='image',
            field=models.ImageField(blank=True, upload_to='static/Posts'),
        ),
    ]