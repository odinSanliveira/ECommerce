from django.urls import path

from . import views

urlpatterns = [

    path('products/', views.getProducts, name="products"),
    path('products/<str:pk>', views.getProductsId, name="product"),
    path('user/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/register', views.registerUser, name='user_register'),
    path('user/profile', views.getUserProfile, name='user_profile'),
    path('users/', views.getUsers, name='users_profiles'),


]

