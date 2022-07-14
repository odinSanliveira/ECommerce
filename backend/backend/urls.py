from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/', include('base.urls'))
    path('backend/api/products/', include('base.urls.products_urls')),
    path('backend/api/users/', include('base.urls.users_urls')),
    path('backend/api/orders/', include('base.urls.orders_urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)