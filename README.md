# ✅ ToDoList 

A simple and responsive **ToDoList** built using **HTML, CSS, and JavaScript**. This project helps users manage daily tasks by adding, editing, deleting, completing, and filtering tasks.

The application uses **Local Storage** to save tasks permanently in the browser, so the data remains available even after refreshing or reopening the browser.

---

## 🚀 Live Demo

(Add your deployed link here)

Example:

https://your-task-manager.netlify.app

---

## 📌 Features

### Task Management
- ✅ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- ✔️ Mark tasks as completed
- 🔄 Update task status dynamically

### Filtering
- 📋 View all tasks
- 🔵 View active tasks
- ✅ View completed tasks

### Data Persistence
- 💾 Uses Browser Local Storage
- 🔁 Tasks remain saved after page refresh

### Responsive Design
- 📱 Mobile friendly
- 💻 Desktop compatible
- Adaptive layout using CSS media queries

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure of the application |
| CSS3 | Styling and responsive design |
| JavaScript | Application logic and DOM manipulation |
| Local Storage | Saving tasks in browser |
| Font Awesome | Icons |

---

## 📂 Project Structure

```
Task-Manager/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
└── README.md
```

---

# ⚙️ How It Works

## 1. Add Task

User enters a task in the input field and clicks **Add Task**.

Example:

```
Learn JavaScript
```

JavaScript creates a task object:

```javascript
{
 id: 12345,
 text: "Learn JavaScript",
 completed: false
}
```

The task is added to the task list and stored in Local Storage.

---

## 2. Complete Task

When the checkbox is clicked:

Before:

```
completed: false
```

After:

```
completed: true
```

The completed task gets a line-through style.

---

## 3. Edit Task

Users can modify existing tasks.

Example:

Before:

```
Learn JS
```

After:

```
Learn Advanced JavaScript
```

---

## 4. Delete Task

The selected task is removed from the task array and updated on the screen.

---

## 5. Filter Tasks

Users can filter tasks based on status:

### All

Displays every task.

### Active

Displays unfinished tasks.

### Completed

Displays completed tasks only.

---

# 🧠 JavaScript Concepts Used

## DOM Manipulation

Used to dynamically update the webpage.

Example:

```javascript
document.getElementById()
```

---

## Event Handling

Used for button clicks and keyboard events.

Example:

```javascript
addBtn.addEventListener()
```

---

## Array Methods

### filter()

Used for selecting and deleting tasks.

Example:

```javascript
tasks.filter()
```

### map()

Used for updating task status.

Example:

```javascript
tasks.map()
```

---

## Local Storage

Saving data:

```javascript
localStorage.setItem()
```

Retrieving data:

```javascript
localStorage.getItem()
```

---

# 🎯 Application Flow

```
User Input
     |
     ↓
Add Task Button
     |
     ↓
Create Task Object
     |
     ↓
Store in Array
     |
     ↓
Save in Local Storage
     |
     ↓
Display Task on UI
```

---

# 📸 Screenshots

(Add screenshots of your project here)

Example:

```
screenshots/
   home.png
   completed.png
```

---

# 💻 Installation & Setup

### Clone Repository

```bash
git clone https://github.com/yourusername/task-manager.git
```

### Navigate to Project Folder

```bash
cd task-manager
```

### Run Project

Open:

```
index.html
```

in your browser.

No additional installation required.

---

# 🔮 Future Enhancements

Possible improvements:

- 🔐 User authentication
- 🌐 Backend integration
- 🗄️ Database support
- 📅 Due dates and reminders
- 🌙 Dark mode
- 🔔 Notifications
- Drag and drop task ordering

---

# 📚 Learning Outcomes

Through this project, I gained experience in:

- Building interactive web applications
- JavaScript DOM manipulation
- Managing application state
- Using browser storage APIs
- Creating responsive layouts
- Implementing CRUD operations

---

# 👨‍💻 Author

**Nanjundeswari M**

GitHub:
(Add your GitHub profile link)

LinkedIn:
(Add your LinkedIn profile link)

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
