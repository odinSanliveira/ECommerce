from django.db.models.signals import pre_save
from django.contrib.auth.models import User

def updateUser(sender, instance, **kwargs):
    print('signal triggered')
    user = instance
    if user.name != '':
        user.username = user.email

pre_save.connect(updateUser, sender=User)