// Updated App.js with Done button, Navbar, and improved styles
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./App.css";

const baseUrl = "http://localhost:8000";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const editInputRef = useRef(null);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${baseUrl}/todos/`);
      setTasks(res.data);
    } catch (error) {
      console.error("❌ Error fetching tasks:", error.message);
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    try {
      await axios.post(`${baseUrl}/add/`, { task: newTask });
      setNewTask("");
      fetchTasks();
    } catch (error) {
      console.error("❌ Error adding task:", error.message);
    }
  };

  const toggleComplete = async (task) => {
    try {
      await axios.put(`${baseUrl}/update/`, {
        _id: task._id,
        completed: !task.completed,
      });
      fetchTasks();
    } catch (error) {
      console.error("❌ Error updating task:", error.message);
    }
  };

  const deleteTask = async (task) => {
    try {
      await axios.delete(`${baseUrl}/delete/`, { data: { _id: task._id } });
      fetchTasks();
    } catch (error) {
      console.error("❌ Error deleting task:", error.message);
    }
  };

  const startEditing = (task) => {
    setEditingId(task._id);
    setEditedText(task.task);
    setTimeout(() => {
      editInputRef.current?.focus();
    }, 0);
  };

  const saveEdit = async (task) => {
    if (!editedText.trim()) return;
    try {
      await axios.put(`${baseUrl}/edit/`, {
        _id: task._id,
        task: editedText,
      });
      setEditingId(null);
      setEditedText("");
      fetchTasks();
    } catch (error) {
      console.error("❌ Error editing task:", error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <h2>📘 My ToDo List</h2>
      </nav>

      <div className="todo-container">
        <h1>📝 ToDo List</h1>
        <div className="input-group">
          <input
            type="text"
            value={newTask}
            placeholder="Enter a task"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task._id} className="task-item">
              {editingId === task._id ? (
                <>
                  <input
                    ref={editInputRef}
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                  <button onClick={() => saveEdit(task)}>💾</button>
                </>
              ) : (
                <>
                  <span
                    onClick={() => toggleComplete(task)}
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                      color: task.completed ? "#bbb" : "white",
                      cursor: "pointer",
                    }}
                  >
                    {task.completed ? "✅ " : "⬜ "} {task.task}
                  </span>
                  <button onClick={() => startEditing(task)}>✏️</button>
                  <button onClick={() => deleteTask(task)}>❌</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="background-symbols">
        <span>✨</span><span>🌀</span><span>💡</span><span>⭐</span><span>✅</span>
      </div>
    </div>
  );
}

export default App;
