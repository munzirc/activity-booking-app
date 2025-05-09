# Activity Booking API

A simple REST API backend for a **Basic Activity Booking App** built with Node.js, Express, and MongoDB.

---

## 📦 Features

✅ User registration and login with JWT (HttpOnly cookie)  
✅ List all activities (public)
✅ Book activities (authenticated users)  
✅ View user’s bookings

---

## ⚙️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB + Mongoose  
- **Authentication:** JWT with HttpOnly cookies  
- **Validation:** express-validator

---

## 🚀 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/munzirc/activity-booking-app.git
cd activity-booking-app
```
### 2️⃣ Install dependencies

```bash
npm install
```

###  3️⃣ Create a .env file

```bash
MONGO_URI=mongodb://localhost:27017/activity-booking
PORT=3000
JWT_SECRET=your_jwt_secret
NODE_ENV="dev"
```

### 4️⃣ Run the server
```bash
npm run dev
```
The server will start at http://localhost:3000.

### 📬 API Endpoints
User APIs
POST /api/auth/register → Register user

POST /api/auth/login → Login user, returns JWT in HttpOnly cookie

Activity APIs
POST /api/activity → Add new activity (authorized)

GET /api/activity → Get all activities

Booking APIs
POST /api/booking/:id → Book an activity (authorized)

GET /api/booking → Get logged-in user’s bookings

### 🛠 Postman Collection
The Postman API collection (activity-booking.postman_collection.json) is included.
You can import it into Postman to test all endpoints.
```bash
link: https://drive.google.com/file/d/11pKQQRDUj0wdQJ7-4YLELgumYaLKVYZP/view?usp=sharing
```

### 🤝 Author
Mahammad Munzir

Email: munzirchnr@gmail.com

GitHub: https://github.com/munzirc
