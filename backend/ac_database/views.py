from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FoodSerializer
from .models import Food

# ! Create your views here.

class FoodView(viewsets.ModelViewSet):
    # * The viewsets base class provides the implementation for CRUD operations by default. 
    # * This code specifies the serializer_class and the queryset
    serializer_class = FoodSerializer
    queryset = Food.objects.all()