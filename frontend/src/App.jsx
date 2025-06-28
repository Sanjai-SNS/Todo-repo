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
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 ToDo List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Enter a task"
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>Add</button>
      </div>

      <ul style={styles.taskList}>
        {tasks.map((task) => (
          <li key={task._id} style={{ ...styles.taskItem, textDecoration: task.completed ? "line-through" : "none" }}>
            {editingId === task._id ? (
              <>
                <input
                  ref={editInputRef}
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  style={styles.input}
                />
                <button onClick={() => saveEdit(task)} style={styles.button}>💾 Save</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleComplete(task)} style={styles.taskText}>
                  {task.task}
                </span>
                <button onClick={() => startEditing(task)} style={styles.iconBtn}>✏️</button>
                <button onClick={() => deleteTask(task)} style={styles.iconBtn}>❌</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    paddingTop: "30px",
  },
  heading: {
    color: "white",
  },
  input: {
    padding: "8px",
    marginRight: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  taskList: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
  taskItem: {
    margin: "10px 0",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  taskText: {
    cursor: "pointer",
    marginRight: "10px",
    flex: 1,
    textAlign: "left",
  },
  iconBtn: {
    marginLeft: "8px",
    padding: "4px 6px",
    cursor: "pointer",
    background: "none",
    border: "none",
    fontSize: "16px",
  },
};

export default App;
