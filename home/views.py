from django.shortcuts import render
from django.views import View

class login(View):
     def get(self,request):
          return render(request,'login.html')
     
     
class regsitration(View):
     def get(self,request):
          return render(request,'registration.html')
     
