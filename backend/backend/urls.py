from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from animal import views

router = routers.DefaultRouter()
router.register(r'animals', views.AnimalView, 'animal')
        
urlpatterns = [
    path('admin/', admin.site.urls),           
    path('api/', include(router.urls))
]