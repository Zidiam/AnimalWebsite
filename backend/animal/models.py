from django.db import models


class Animal(models.Model):
    species = models.CharField(max_length=120)
    age = models.TextField(max_length=5)
    name = models.TextField(max_length=120)
    colors = models.TextField(max_length=120)
    extinct = models.BooleanField(default=False)

    def __str__(self):
        return self.species
