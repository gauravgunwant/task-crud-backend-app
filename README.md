# 🚀 Task Management Backend API

A clean and structured RESTful backend application built using **Node.js, Express, and MongoDB**.  
Implements full CRUD operations with middleware logging and environment configuration.

---

## 🧠 Overview

This project demonstrates:

- REST API architecture
- Express middleware chaining
- MongoDB integration using Mongoose
- Structured request logging (Morgan + Winston)
- Async/Await based controller logic
- Modular folder structure

---

## 🛠 Tech Stack

- **Node.js**
- **Express 5**
- **MongoDB**
- **Mongoose**
- **Morgan**
- **Winston**
- **dotenv**

---

## 📂 Project Structure

```
Task-Management-Backend-Application/
│
├── src/
│   ├── models/
│   │   ├── db.model.js
│   │   └── logger.model.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   └── app.js
│
├── index.js
├── package.json
└── .env
```

---

## 🔥 API Endpoints

### ➤ Create Task

```
POST /task
```

**Request Body**

```json
{
  "task": "Build backend API",
  "description": "Implement CRUD using Express and MongoDB"
}
```

**Response**
```
201 Created
```

---

### ➤ Get All Tasks

```
GET /task
```

---

### ➤ Update Task Description

```
PATCH /task/:id
```

**Request Body**

```json
{
  "description": "Updated description"
}
```

---

### ➤ Delete Task

```
DELETE /task/:id
```

---

## 📊 Logging System

- **Morgan** → Captures request metadata  
  - Method  
  - URL  
  - Status code  
  - Response time  

- **Winston** → Structured logging  
  - Log levels (`info`, `error`, `debug`)  
  - Can be extended to file or JSON storage  

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd Task-Management-Backend-Application
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Run Development Server

```bash
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

## 📌 Features

- RESTful architecture
- MongoDB integration
- Middleware-based logging
- Async database handling
- Modular backend structure

---

## 👨‍💻 Author

Bhavesh Gunwant
