from django.urls import path

from base.views import orders_views as views

urlpatterns = [
    path('add/', views.addOrdersItems, name='orders-add'),
    path('', views.getMyOrders, name='orders')
]

