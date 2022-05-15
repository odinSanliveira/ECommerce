from django.urls import path

from base.views import users_views as views

urlpatterns = [
    path('', views.getUsers, name='users_profiles'),
    path('login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register', views.registerUser, name='user_register'),
    path('profile', views.getUserProfile, name='user_profile'),
]

