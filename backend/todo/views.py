from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from pymongo import MongoClient
from bson import ObjectId
import json

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["todo"]
collection = db["list"]

@csrf_exempt
def get_todos(request):
    if request.method == "GET":
        todos = list(collection.find({}, {"_id": 1, "task": 1, "completed": 1}))
        for todo in todos:
            todo["_id"] = str(todo["_id"])  # Convert ObjectId to string
        return JsonResponse(todos, safe=False)

@csrf_exempt
def add_todo(request):
    if request.method == "POST":
        data = json.loads(request.body)
        task = data.get("task")
        if task:
            _id = str(ObjectId())
            collection.insert_one({
                "_id": _id,
                "task": task,
                "completed": False
            })
            return JsonResponse({"message": "Task added", "_id": _id})
        return JsonResponse({"error": "No task provided"}, status=400)

@csrf_exempt
def update_todo(request):
    if request.method == "PUT":
        data = json.loads(request.body)
        _id = data.get("_id")
        completed = data.get("completed")
        if _id is not None and completed is not None:
            result = collection.update_one(
                {"_id": _id},
                {"$set": {"completed": completed}}
            )
            return JsonResponse({"message": "Task updated" if result.modified_count else "No matching task found"})
        return JsonResponse({"error": "Invalid data"}, status=400)

@csrf_exempt
def edit_task(request):
    if request.method == "PUT":
        data = json.loads(request.body)
        _id = data.get("_id")
        task = data.get("task")
        if _id and task:
            result = collection.update_one(
                {"_id": _id},
                {"$set": {"task": task}}
            )
            return JsonResponse({"message": "Task text updated" if result.modified_count else "No matching task found"})
        return JsonResponse({"error": "Invalid data"}, status=400)

@csrf_exempt
def delete_todo(request):
    if request.method == "DELETE":
        data = json.loads(request.body)
        _id = data.get("_id")
        if _id:
            result = collection.delete_one({"_id": _id})
            return JsonResponse({"message": "Task deleted" if result.deleted_count else "Task not found"})
        return JsonResponse({"error": "No _id provided"}, status=400)
