# 📝 Todo List Application

A full-stack todo list application built with Django REST Framework backend and React frontend.

## Features

### ✨ Core Features
- ➕ **Add Todos**: Create new todos with title, description, priority, and due date
- ✅ **Mark Complete**: Toggle completion status with a single click
- ✏️ **Edit Todos**: Inline editing of all todo properties
- 🗑️ **Delete Todos**: Remove individual todos
- 🧹 **Bulk Actions**: Clear all completed todos at once

### 🎯 Advanced Features
- 📊 **Statistics**: View total, pending, and completed todo counts
- 🔍 **Filtering**: Filter by all, pending, or completed todos
- ⚡ **Priority Levels**: Set and visualize todo priorities (Low, Medium, High)
- 📅 **Due Dates**: Set due dates with overdue indicators
- 📱 **Responsive Design**: Works perfectly on desktop and mobile
- 🎨 **Modern UI**: Beautiful, intuitive interface with smooth animations

## Tech Stack

### Backend
- **Django 5.2.3**: Web framework ([Django Documentation](https://docs.djangoproject.com/))
- **Django REST Framework**: API development ([DRF Documentation](https://www.django-rest-framework.org/))
- **SQLite**: Database
- **CORS Headers**: Cross-origin resource sharing

### Frontend
- **React 19.1.0**: UI library ([React Documentation](https://reactjs.org/docs/getting-started.html))
- **Modern CSS**: Responsive design with CSS Grid and Flexbox
- **Fetch API**: HTTP client for API communication

## Project Structure

```
project-root/
├── backend/                 # Django backend
│   ├── backend/            # Django project settings
│   │   ├── settings.py     # Configuration
│   │   ├── urls.py         # Main URL routing
│   │   └── ...
│   ├── demo/               # Main Django app
│   │   ├── models.py       # Todo model
│   │   ├── views.py        # API views
│   │   ├── serializers.py  # DRF serializers
│   │   ├── urls.py         # App URL routing
│   │   └── admin.py        # Admin interface
│   ├── db.sqlite3          # SQLite database
│   └── manage.py           # Django management script
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── TodoForm.js
│   │   │   ├── TodoList.js
│   │   │   ├── TodoItem.js
│   │   │   └── TodoFilter.js
│   │   ├── App.js          # Main App component
│   │   ├── App.css         # Styles
│   │   └── index.js        # Entry point
│   ├── package.json        # Dependencies
│   └── ...
└── .venv/                  # Python virtual environment
```

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 14+
- npm or yarn

### Project Setup

1. **Navigate to project directory**:
   ```bash
   cd Todo-repo
   ```

2. **Activate virtual environment**:
   ```bash
   # Windows
   .venv/Scripts/activate
   
   # macOS/Linux
   source ../.venv/bin/activate
   ```

3. **Install dependencies** (if not already installed):
   ```bash
   pip install -r requirements.txt
   ```

### Backend Setup
   
4. **Navigate to backend directory**:
   ```bash
   cd backend
   ```
   
5. **Run migrations**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create superuser** (optional, for admin access):
   ```bash
   python manage.py createsuperuser
   ```

7. **Start the development server**:
   ```bash
   python manage.py runserver
   ```

   The backend will be available at `http://localhost:8000`.
   
   if it's not working try this path `http://127.0.0.1:8000/todos/`.

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npx vite
   ```
   or
   
   ```bash
   npx vite --debug
   ```

   The frontend will be available at `http://localhost:5173`.

## Demo Video



https://github.com/user-attachments/assets/62e7aba6-464b-4efd-98fb-581016b2781f



Demo Video Link (It only available only you cloned thid repo) : `https://github.com/Sanjai-SNS/Todo-repo/blob/main/To-Do-Demo.mp4`

If it can't accessable you can use this video by clicking this : `https://drive.google.com/file/d/1Lvb2pFOgmojNgTBxun4smtjodhENpRmc/view?usp=drive_link`

## API Endpoints

### Todo End

https://github.com/user-attachments/assets/9e6dd936-d5b6-4df0-ae30-00fee698aa9b

points
- `GET /api/todos/` - List all todos
- `POST /api/todos/` - Create a new todo
- `GET /api/todos/{id}/` - Get a specific todo
- `PUT /api/todos/{id}/` - Update a todo (full update)
- `PATCH /api/todos/{id}/` - Update a todo (partial update)
- `DELETE /api/todos/{id}/` - Delete a todo

### Custom Endpoints
- `GET /api/todos/completed/` - Get all completed todos
- `GET /api/todos/pending/` - Get all pending todos
- `PATCH /api/todos/{id}/toggle_complete/` - Toggle completion status
- `DELETE /api/todos/clear_completed/` - Delete all completed todos

### Basic Endpoints
- `GET /` - API status
- `GET /home/` - Welcome message
- `GET /about/` - About information
- `GET /contact/` - Contact information

## Usage

### Adding a Todo
1. Enter a title in the main input field
2. Optionally add a description
3. Select a priority level (Low, Medium, High)
4. Optionally set a due date
5. Click "Add Todo"

### Managing Todos
- **Complete**: Click the checkbox next to any todo
- **Edit**: Click the edit (✏️) button to modify todo details
- **Delete**: Click the delete (🗑️) button to remove a todo

### Filtering
- **All**: View all todos
- **Pending**: View only incomplete todos
- **Completed**: View only completed todos
- **Clear Completed**: Remove all completed todos at once

### Priority System
- **High Priority**: Red badge, urgent tasks
- **Medium Priority**: Orange badge, normal tasks
- **Low Priority**: Green badge, less urgent tasks

### Due Dates
- Set due dates for better task management
- Overdue todos are highlighted in red
- Due dates are displayed in a user-friendly format

## Development

### Backend Development
- Models are defined in `backend/demo/models.py`
- API views use Django REST Framework ViewSets
- Admin interface is available at `http://localhost:8000/admin/`

### Frontend Development
- Components are modular and reusable
- State management uses React hooks
- Responsive design works on all screen sizes
- Error handling for API failures

### Database
- SQLite database for development
- Todo model includes all necessary fields
- Migrations handle database schema changes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please create an issue in the repository or contact the development team.

---

**Happy Todo Managing! 📝✨**
