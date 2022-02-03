from django.contrib import admin
from .models import Food

class DatabaseAdmin(admin.ModelAdmin):
    list_display = ('name', 'cost')

# Register your models here.
admin.site.register(Food, DatabaseAdmin)