# 💬 Realtime Chat Application

A **full-stack, real-time chat platform** built with **Next.js, Node.js, Redis, Kafka, Socket.IO, and Docker**, supporting group messaging, authentication, and analytics.  
This app is designed to handle **5K+ concurrent users** with **<100ms latency** using a distributed event-driven architecture.

🎥 **[Watch Demo on YouTube](https://www.youtube.com/watch?v=qjpjUYtaVFc)**  

---

## 🚀 Features

- ⚡ **Real-time messaging** with Socket.IO  
- 🧠 **Kafka-based event streaming** for reliable message delivery  
- 🔁 **Redis Pub/Sub adapter** for multi-instance synchronization  
- 👥 **User authentication & group chat support**  
- 📊 **Admin dashboard** for analytics and message insights  
- 🐳 **Dockerized deployment** for scalability  
- 🧩 **Optimized caching**, reducing DB reads by 65%

---

## 🛠️ Tech Stack

**Frontend:** Next.js, React.js  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Messaging Queue:** Kafka  
**Caching & Pub/Sub:** Redis  
**Real-time Communication:** Socket.IO  
**Containerization:** Docker  

---

## 🧩 Architecture Overview

```text
Client (Next.js)
      |
      v
Backend (Express + Socket.IO)
      |
      +--> Redis Adapter (Pub/Sub)  ---> Sync messages across instances
      |
      +--> Kafka Producer/Consumer ---> Stream & persist messages
      |
      +--> MongoDB ------------------> Store chats & user data


Setup Instructions :-

Clone the repository
git clone https://github.com/yourusername/Scalable-Chat-App.git
cd Scalable-Chat-App

Install dependencies
npm install

Configure environment variables
PORT=5000
MONGO_URI=your_mongo_connection
REDIS_URL=your_redis_connection
KAFKA_BROKER=localhost:9092
JWT_SECRET=your_secret_key


Start services (Kafka + Redis + Mongo)
docker-compose up

Run the app
npm run dev
