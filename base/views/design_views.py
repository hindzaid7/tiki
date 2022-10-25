import email
from email import message
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.models import Design
from base.serializers import DesignSerializer




@api_view(['GET'])
def getDesigns(request):
    designs = Design.objects.all()
    serializer = DesignSerializer(designs,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getDesign(request, pk):
    design = Design.objects.get(_id=pk)
    serializer = DesignSerializer(design, many=False)
    return Response(serializer.data)