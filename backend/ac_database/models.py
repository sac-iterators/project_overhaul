from turtle import title
from django.db import models

# Create your models here.
class Food(models.Model):
    name = models.CharField(max_length=120)
    cost = models.FloatField()
    
    def _str_(self):
        return self.name