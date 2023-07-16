from django.urls import path
from inst import views

urlpatterns = [
    path('', views.home, name = 'home'),
]