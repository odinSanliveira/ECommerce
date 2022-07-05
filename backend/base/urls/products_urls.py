from django.urls import path

from base.views import products_views as views

urlpatterns = [
    path('', views.getProducts, name="products"),
    path('<str:pk>', views.getProductsId, name="product"),
    path('<str:pk>/reviews/', views.createProductReview, name="product_review"),
]

