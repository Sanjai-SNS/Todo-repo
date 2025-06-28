from django.apps import AppConfig

class TodoConfig(AppConfig):  # ✅ Class name must match
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'todo'  # ✅ Must match your app folder name
