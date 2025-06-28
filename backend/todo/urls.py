from django.urls import path
from . import views

urlpatterns = [
    path("todos/", views.get_todos),
    path("add/", views.add_todo),
    path("update/", views.update_todo),
    path("edit/", views.edit_task),
    path("delete/", views.delete_todo),
]
