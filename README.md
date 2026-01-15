# 🚀 Premium Capital

**Premium Capital** is a visually polished, full‑stack **demo trading & investment platform** built to showcase real‑world engineering skills, scalable architecture, and modern frontend/backend practices.

> ⚠️ **Important Notice**
> This project is **strictly for educational and portfolio purposes**. No real financial transactions occur on this platform.

The goal of this project is to demonstrate how a production‑style trading application can be designed, built, and scaled — both visually and technically.

---

## ✨ Why This Project Stands Out

- Clean, premium UI inspired by real trading platforms
- Role‑based admin dashboard with advanced features
- Real‑time updates powered by MongoDB Change Streams + Socket.IO
- Decoupled backend architecture (main app + real‑time server)
- Built with scalability, performance, and maintainability in mind

---

## 🔐 Demo Admin Access (For Recruiters & Reviewers)

To make exploration fast and frictionless, a **demo admin account** is provided.

> You do **NOT** need to register or verify an email.

**Demo Login Credentials (pre‑filled on login page):**

- **Email:** `demo@premiumcapital.app`
- **Password:** `demo12345`

Every demo user is automatically granted **admin access** so reviewers can explore:

- Admin dashboard
- Advanced controls
- Data‑driven UI states

---

## 🏗️ System Architecture

Premium Capital uses a **decoupled, real‑time architecture** to ensure instant UI updates without blocking the main application.

```
Frontend (Next.js)
   ↓
Main API Server (Next.js API Routes)
   ↓
MongoDB Atlas
   ↓
MongoDB Change Streams
   ↓
Independent Real‑Time Server (Node.js + Socket.IO, hosted on Railway)
   ↓
Live updates pushed instantly to connected clients
```

This architecture mirrors how modern fintech and SaaS platforms handle **live balances, investments, and dashboards**.

---

## 🧠 Core Features

### 👤 Authentication & Security

- Email & password authentication
- JWT‑based session handling
- Password hashing with bcrypt
- Secure cookies & protected routes

### 🧑‍💼 Admin Dashboard

- Role‑based access control
- Investment plan management
- User activity monitoring
- Real‑time UI updates

### 📈 Investment Simulation

- Multiple investment plans
- Daily ROI calculations
- Min/max investment validation
- Projected profit previews

### ⚡ Real‑Time Updates

- MongoDB Change Streams listener
- Independent Socket.IO server
- Instant UI sync across clients

### 💬 Live Support Chat

- Integrated **SmartSupp** live chat system
- Users can message support directly from the app
- Mirrors real fintech customer‑support workflows

### 🎨 UI / UX

- Premium dark‑mode design
- Styled‑Components architecture
- Toast notifications for feedback
- Responsive & accessible layout

### 🎨 UI / UX

- Premium dark‑mode design
- Styled‑Components architecture
- Toast notifications for feedback
- Responsive & accessible layout

---

## 🛠️ Main Application Tech Stack

### Frontend

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Styled‑Components**
- **Redux Toolkit** (state management)
- **React Hot Toast**
- **React Icons**
- **React Slick / Slick Carousel**

### Backend (within Next.js)

- **Next.js API Routes**
- **NextAuth** (authentication)
- **MongoDB Atlas**
- **Mongoose** (ODM)
- **JWT**
- **bcryptjs**
- **Nodemailer** (email workflows)

### Real‑Time & Effects

- **Socket.IO (client)**
- **tsParticles** (advanced animations)

---

## ⚙️ Independent Real‑Time Server (Railway)

A **separate backend service** listens for MongoDB Change Streams and broadcasts updates to the frontend.

🔗 **Real‑Time Server Repository:**
👉 [https://github.com/Ekekwecharles/premium-capital-realtime-service](https://github.com/Ekekwecharles/premium-capital-realtime-service)

### Tech Stack

- **Node.js**
- **Express 5**
- **Socket.IO**
- **MongoDB Change Streams**
- **Mongoose**
- **TypeScript**

This separation ensures:

- Better scalability
- Clear responsibility boundaries
- Production‑ready architecture

---

## 📦 Project Purpose

This project was built to:

- Demonstrate **real‑world full‑stack engineering skills**
- Showcase **system design & architecture thinking**
- Highlight ability to build **production‑grade UI & backend logic**

🚫 **No real trading, deposits, or withdrawals occur.**

---

## 🚀 Getting Started (Local Setup)

```bash
# install dependencies
npm install

# run development server
npm run dev
```

Environment variables are required for:

- MongoDB connection
- Authentication secrets
- Email configuration

---

## 👨‍💻 About the Developer

Built with passion and attention to detail by **Ekekwe Charles**.

This project reflects:

- Strong frontend fundamentals
- Backend & database expertise
- Real‑time systems knowledge
- Clean code & scalable architecture

If you’re hiring for a **Frontend / Full‑Stack Engineer** who understands **both UI and systems**, this project speaks for itself.

---

⭐ If you find this project impressive, feel free to star the repository.
