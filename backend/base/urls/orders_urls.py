from django.urls import path

from base.views import orders_views as views

urlpatterns = [
    path('', views.getOrders, name='orders'),
    path('add/', views.addOrdersItems, name='orders-add'),
    path('myorders/', views.getMyOrders, name='my-orders'),
    path('<str:pk>/deliver/', views.updateOrderToDelivered, name='order-delivered'),
    path('<str:pk>/pay/', views.updateOrderToPaid, name='pay'),
    path('<str:pk>/', views.getOrderById, name='user-order'),

]

