# Generated by Django 4.1.3 on 2023-01-19 11:39

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('myapp', '0012_alter_postmodel_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='postmodel',
            name='comment_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='postmodel',
            name='likers',
            field=models.ManyToManyField(blank=True, related_name='likes', to=settings.AUTH_USER_MODEL),
        ),
    ]