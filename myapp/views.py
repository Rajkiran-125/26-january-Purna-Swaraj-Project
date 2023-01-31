from django.shortcuts import render,redirect
from django.views import View
from .models import PostModel,EventModel,SignupModel
from .forms import LoginForm,SignupForm,PostForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout

# Create your views here.

def home(request):
    return render(request,'home.html')

class signup(View):
    def get(self,request):
        form = SignupForm()
        return render(request,'signup.html',{'form':form})
    def post(self,request):
        form = SignupForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
        User.objects.create_user(username=username,email=email,password=password)
        form.save()
        return redirect('login')

def post(request):
    user = request.user
    # post = SignupModel(username= user)
    return render(request,'post.html',{'user':post})

class login(View):
    def get(self,request):
        return render(request,'login.html')



class login(View):
    def get(self,request):
        form = LoginForm()
        return render(request,'login.html',{'form':form})
    def post(self,request):
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
        user=authenticate(username=username,password=password)
        if user is not None:
            auth_login(request,user)
            return redirect('home')
        else:
            return redirect('post')

def logout(request):
    auth_logout(request)
    return redirect('home')



def post(request):
    post = PostModel.objects.all().order_by('-date')
    return render(request,'post.html',{'post':post})


class createpost(View):
    def get(self,request):
        form = PostForm()
        return render(request,'createpost.html',{'form':form})
    def post(self,request):
        form = PostForm(request.POST,request.FILES)
        if form.is_valid():
            user = request.user
            text = form.cleaned_data['text']
            image = form.cleaned_data['image']
            post = PostModel(user=user,text=text,image=image)
            post.save()
        return redirect('post')


class profile(View):
    def get(self,request):
        username = request.user
        if request.user.is_authenticated:
            pro = PostModel.objects.filter(user = username).order_by('-date')
            return render(request,'profile.html',{'profile':pro})
        else:
            form = LoginForm()
            return render(request,'login.html',{'form':form})


class quiz(View):
    def get(self,request):
        return render(request,'quiz.html')

class coupon(View):
    def get(self,request):
        return render(request,'coupon.html')

def quizfirstpage(request):
    return render(request,'quiz-first-page.html')


class event(View):
    def get(self,request):
        event = EventModel.objects.all()
        return render(request,'event.html',{'event':event})


class eventbooking(View):
    def get(self,request):
        if request.user.is_authenticated:
            return render(request,'eventbooking.html')
        else:
            form = LoginForm()
            return render(request,'login.html',{'form':form})

def journey(request):
    return render(request,'journey.html')


class payment(View):
    def get(self,request):
        return render(request,'payment.html')

def pdf(request):
    return render(request,'pdf.html')

def blog(request):
    return render(request,'blog.html')

def dashboard(request):
    return render(request,'dashboard.html')

class loginevent(View):
    def get(self,request):
        form = LoginForm()
        return render(request,'login.html',{'form':form})
    def post(self,request):
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
        user=authenticate(username=username,password=password)
        if user is not None:
            auth_login(request,user)
            return redirect('eventbooking')
        else:
            return redirect('loginevent')
