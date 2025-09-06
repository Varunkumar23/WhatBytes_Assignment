🏥 Patient-Doctor Management API

A Node.js + Express backend for managing patients, doctors, and their mappings, secured with JWT authentication.
MongoDB is used as the database (via Mongoose ORM).

🚀 Features

Authentication (JWT)

Register & Login users

Patient Management

Add, update, delete, and view patients

Doctor Management

Add, update, delete, and view doctors

Patient–Doctor Mapping

Assign doctors to patients

View doctors assigned to a patient

Remove doctor-patient mappings

🛠️ Tech Stack

Node.js + Express.js

MongoDB with Mongoose

JWT Authentication (using jsonwebtoken)

bcrypt.js for password hashing

dotenv for environment variables


Installation

Clone this repository:

git clone (https://github.com/Varunkumar23/WhatBytes_Assignment.git)
cd directory_name

Install dependencies:

npm install


Create a .env file in the root:

PORT=5000
MONGO_URI=mongodb://localhost:27017/patient_doctor_db
JWT_SECRET=your_secret_key


Start the server:

npm run dev


Server runs on: http://localhost:5000

🔑 Authentication APIs
Register User

POST /api/auth/register

{
  "name": "User",
  "email": "user@example.com",
  "password": "mypassword"
}

Login User

POST /api/auth/login

{
  "email": "user@example.com",
  "password": "mypassword"
}


✅ Returns JWT token

👨‍⚕️ Patient APIs
Add Patient

POST /api/patients/ (🔒 Auth required)

{
  "name": "John Doe",
  "age": 30,
  "gender": "Male",
  "disease": "Flu"
}

Get All Patients

GET /api/patients/ (🔒 Auth required)

Get Patient by ID

GET /api/patients/:id

Update Patient

PUT /api/patients/:id

Delete Patient

DELETE /api/patients/:id

👨‍⚕️ Doctor APIs
Add Doctor

POST /api/doctors/ (🔒 Auth required)

{
  "name": "Dr. Smith",
  "specialization": "Cardiology",
  "experience": 10
}

Get All Doctors

GET /api/doctors/

Get Doctor by ID

GET /api/doctors/:id

Update Doctor

PUT /api/doctors/:id

Delete Doctor

DELETE /api/doctors/:id

🔗 Patient-Doctor Mapping APIs
Assign Doctor to Patient

POST /api/mappings/

{
  "patientId": "64f91b...abc",
  "doctorId": "64f91c...xyz"
}

Get All Mappings

GET /api/mappings/

Get Doctors for a Patient

GET /api/mappings/:patientId

PUT /api/mappings/:patientId

GET /api/mappings/:patientId

Remove a Mapping

DELETE /api/mappings/:id


🧪 Testing

Use Postman or Thunder Client to test the APIs.
Make sure to include the JWT token in headers for protected routes:

Authorization: Bearer <your_token>

📂 Project Structure
patient-doctor-api/
│-- models/
│   ├── User.js
│   ├── Patient.js
│   ├── Doctor.js
│   └── Mapping.js
│-- routes/
│   ├── authRoutes.js
│   ├── patientRoutes.js
│   ├── doctorRoutes.js
│   └── mappingRoutes.js
│-- controllers/
│   ├── authController.js
│   ├── patientController.js
│   ├── doctorController.js
│   └── mappingController.js
│-- middleware/
│   └── authMiddleware.js
│-- server.js
│-- package.json
│-- .env
│-- README.md
