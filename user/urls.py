from django.urls import path
from user import views


urlpatterns = [
     path('dashboard/', views.dashboard, name='dashboard'),
     path('portfolio/',views.portfolio,name='portfolio'),
     path('alerts/',views.alerts,name='alerts'),
     path('news/',views.news,name='news')
]
