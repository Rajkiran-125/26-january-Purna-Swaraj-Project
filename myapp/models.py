from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.

class SignupModel(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=50)


class LoginModel(models.Model):
    username = models.CharField(max_length=50,blank=True)
    password = models.CharField(max_length=50)


class PostModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    text = models.CharField(max_length=50)
    image = models.FileField(upload_to='myPosts',blank=True)


class EventModel(models.Model):
    name = models.CharField(max_length=100)
    place = models.CharField(max_length=100)
    image = models.FileField(upload_to='myPosts',blank=True)
    
    