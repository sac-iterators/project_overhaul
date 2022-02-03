from rest_framework import serializers
from .models import Food

# You will need serializers to convert model instances to JSON so that the frontend can work with the received data.

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ('id', 'name', 'cost')