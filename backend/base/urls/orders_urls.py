from django.urls import path

from base.views import orders_views as views

urlpatterns = [
    path('add/', views.addOrdersItems, name='orders-add'),
     path('myorders/', views.getMyOrders, name='myorders'),
    path('<str:pk>/deliver/', views.updateOrderToDelivered, name='order-delivered'),
    path('<str:pk>/', views.getOrderById, name='user-order'),
    path('<str:pk>/pay/', views.updateOrderToPaid, name='pay'),
]

