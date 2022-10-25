from django.urls import path 
from base.views import design_views as views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns=[
    path('',views.getDesigns,name="designs"),
    path('<str:pk>/',views.getDesign,name="design"),

  
]