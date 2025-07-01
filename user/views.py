from django.shortcuts import render
 
def dashboard(request):
     return render(request,'dashboard.html')
     
     
def portfolio(request):
     return render(request,'portfolio.html')
     
     
def alerts(request):
     return render(request,'alerts.html')
     
     
def news(request):
     return render(request,'news.html')
          
          
