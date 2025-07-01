from django.urls import path
from home.views import *

urlpatterns = [
    path('login/',login.as_view(),name="Login"),
    path('regs/',regsitration.as_view(),name="Registartion")
]