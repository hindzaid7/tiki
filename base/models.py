from statistics import mode
from xml.etree.ElementTree import Comment
from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Category(models.Model):

    name = models.CharField(max_length=200,null=True,blank=True)
    _id = models.AutoField(primary_key=True,editable=False)
    def __str__(self):
        return self.name

class Design(models.Model):
    STATUS_CHOICES=[ (True,'Active'),(False,'Nont Active')]
    status= models.BooleanField( choices = STATUS_CHOICES ,default = True)
    designer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True,verbose_name="Designer",limit_choices_to={'is_staff': True})
    name = models.CharField(max_length=200,null=True,blank=True)
    image= models.ImageField(null=True,blank=True)
    category = models.ForeignKey(Category,blank=True, null=True, on_delete=models.SET_NULL)
    description =  models.TextField(null=True,blank=True)
    price = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
    font = models.CharField(max_length=200,null=True,blank=True)
    Comment = models.TextField(null=True,blank=True)
    style = models.CharField(max_length=200,null=True,blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    createdAt= models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return self.name +" | "+str(self.status) +" | "+ str(self.category) +" | "+ str(self.price)



class Review(models.Model):
    design = models.ForeignKey(Design, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)


