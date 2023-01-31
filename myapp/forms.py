from django import forms
from .models import LoginModel,SignupModel,PostModel


class SignupForm(forms.ModelForm):
    class Meta:
        model = SignupModel
        fields = "__all__"

        widgets = {
            'username':forms.TextInput(attrs={'placeholder':'Enter UserName'}),
            'email':forms.EmailInput(attrs={'placeholder':'Enter Email'}),
            'password':forms.PasswordInput(attrs={'placeholder':'Enter Password'}), 
        }

class LoginForm(forms.ModelForm):
    class Meta:
        model = LoginModel
        fields = "__all__"

        widgets = {
            'username':forms.TextInput(attrs={'name':'userName','id':'userName','type':'text','placeholder':'Enter Username'}),
            'password':forms.PasswordInput(attrs={'name':'userPassword','id':'userPassword','type':'password','placeholder':'Enter Password'}), 
        }


class PostForm(forms.ModelForm):
    class Meta:
        model = PostModel
        fields = ['text','image']

        widgets ={
            'text':forms.TextInput(attrs={'type':'text','id':'userName','placeholder':'Enter a Text'}),
            'image':forms.FileInput(attrs={'type':'file'})
        }