from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import SignupModel,PostModel,EventModel

# Register your models here.

@admin.register(SignupModel)
class SignupModelAdmin(admin.ModelAdmin):
    list_display =['id','username','email','password']


@admin.register(PostModel)
class PostModelAdmin(admin.ModelAdmin):
    list_display =['id','user','date','text','image']

@admin.register(EventModel)
class EventModelAdmin(admin.ModelAdmin):
    list_display =['id','name','place','image']