# Kanban Board

## 📌 Project Overview
This is a **Kanban Board** application that allows users to organize tasks into different categories (To Do, In Progress, Done). The app features a **full-stack implementation** with a **React frontend**, an **Express backend**, and **PostgreSQL database** for storing tasks and user data.

## 🚀 Features
- **User Authentication** (Sign Up, Login, JWT-based authentication)
- **Task Management** (Create, Update, Delete, Drag & Drop tasks between columns)
- **Filtering by Status and Priority**
- **Responsive UI** with drag-and-drop functionality
- **Persistent Data Storage** using PostgreSQL & Sequelize ORM

---

## 🏗️ Tech Stack
### **Frontend**
- React + TypeScript
- Vite for fast builds
- TailwindCSS for styling
- React DnD for drag & drop functionality

### **Backend**
- Node.js + Express
- PostgreSQL (Relational Database)
- Sequelize (ORM)
- JWT Authentication for secure login sessions

### **Deployment**
- Hosted on **Render**
- PostgreSQL database managed via **Render Databases**

---

## 📂 Project Structure
```
Kanban-Board/
│
├── Develop/                 # Main project folder
│   ├── client/              # Frontend (React + Vite)
│   ├── server/              # Backend (Node.js + Express + Sequelize)
│   ├── package.json         # Main dependencies & scripts
│   ├── tsconfig.json        # TypeScript config
│   └── README.md            # Project documentation
```

---

## 🛠️ Installation & Setup
### **1️⃣ Clone the repository**
```bash
git clone https://github.com/yourusername/kanban-board.git
cd kanban-board/Develop
```

### **2️⃣ Install dependencies**
```bash
npm install
cd client && npm install
cd ../server && npm install
```

### **3️⃣ Set up environment variables**
Create a `.env` file inside `server/` and add:
```
PORT=10000
DATABASE_URL=your_postgresql_database_url
JWT_SECRET_KEY=your_secret_key
```

### **4️⃣ Run the application**
#### **Frontend (Client):**
```bash
cd client
npm run dev
```

#### **Backend (Server):**
```bash
cd server
npm run dev
```

---

## 🚀 Deployment on Render
### **1️⃣ Update Render Settings**
| Setting | Value |
|---------|------------------------------|
| Root Directory | `Develop` |
| Build Command | `cd Develop && npm install --force && npm run build` |
| Start Command | `cd Develop && npm run server` |

### **2️⃣ Set Environment Variables in Render**
Go to **Render Dashboard → Environment Variables** and add:
```
PORT=10000
DATABASE_URL=your_database_url
JWT_SECRET_KEY=your_secret_key
```

### **3️⃣ Deploy & Monitor Logs**
- Push changes to GitHub.
- Render will auto-build and deploy.
- Monitor logs for any errors.

---

## 📝 API Endpoints
### **User Authentication**
| Method | Endpoint         | Description           |
|--------|----------------|----------------------|
| POST   | `/api/auth/signup` | Register a new user  |
| POST   | `/api/auth/login`  | Authenticate user   |

### **Tasks**
| Method | Endpoint        | Description           |
|--------|---------------|----------------------|
| GET    | `/api/tasks`    | Get all tasks       |
| POST   | `/api/tasks`   | Create a new task   |
| PUT    | `/api/tasks/:id` | Update a task      |
| DELETE | `/api/tasks/:id` | Delete a task      |

---

## 🎨 UI Preview
![Kanban Board UI](https://via.placeholder.com/800x400?text=Kanban+Board+Preview)

---

## 👨‍💻 Contributing
1. **Fork** the repository.
2. **Create** a new branch (`git checkout -b feature-name`).
3. **Commit** changes (`git commit -m 'Added new feature'`).
4. **Push** to your fork (`git push origin feature-name`).
5. Create a **Pull Request**.

---

## 📜 License
This project is licensed under the **MIT License**.

