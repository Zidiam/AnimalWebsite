from django.contrib import admin
from .models import Animal


class AnimalAdmin(admin.ModelAdmin):
    list_display = ('species', 'age', 'name', 'colors', 'extinct')


admin.site.register(Animal, AnimalAdmin)
