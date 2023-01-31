from . import views
from django.urls import path

urlpatterns = [
    path('',views.home,name='home'),
    path('post',views.post,name='post'),
    path('journey',views.journey,name='journey'),
    path('login',views.login.as_view(),name='login'),
    path('signup',views.signup.as_view(),name='signup'),
    path('logout',views.logout,name="logout"),
    path('createpost',views.createpost.as_view(),name='createpost'),
    path('profile',views.profile.as_view(),name='profile'),
    path('quiz',views.quiz.as_view(),name='quiz'),
    path('coupon',views.coupon.as_view(),name='coupon'),
    path('quizfirstpage',views.quizfirstpage,name='quizfirstpage'),
    path('event',views.event.as_view(),name="event"),
    path('eventbooking',views.eventbooking.as_view(),name="eventbooking"),
    path('payment',views.payment.as_view(),name="payment"),
    path('pdf',views.pdf,name='pdf'),
    path('blog',views.blog,name='blog'),
    path('dashboard',views.dashboard,name='dashboard'),
    path('loginevent',views.loginevent.as_view(),name='loginevent'),
    

]
 