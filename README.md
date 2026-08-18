# Pet Adoption - Authentication Module

## 1. What the Module Does

This authentication module provides a secure authentication system for the Pet Adoption project.

It allows users to:

* Create a new account using the signup route.
* Login using their email and password.
* Receive a JWT token after successful signup or login.
* Access protected routes using the JWT token.
* Use different user roles based on their permissions.

Passwords are securely hashed using `bcryptjs`, and JWT is used for authentication.

## 2. User Roles

The project has the following user roles:

* **Admin** – manages the system.
* **Shelter** – manages pets available for adoption.
* **Rescuer** – manages rescued pets.
* **Adopter** – user who wants to adopt pets.

## 3. Authentication Routes

### POST /signup

Creates a new user account and returns a JWT token.

**Example Request:**

```json
{
  "name": "Ahmed Ali",
  "email": "ahmed@example.com",
  "password": "123456",
  "role": "Adopter",
  "phone": "01000000000"
}
```

**Response:**

```json
{
  "message": "User registered successfully",
  "token": "JWT_TOKEN"
}
```

### POST /login

Authenticates an existing user and returns a JWT token.

**Example Request:**

```json
{
  "email": "ahmed@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

## 4. Protected Route

### GET /profile

This is a protected route.

The user must send a valid JWT token in the request header.

**Authorization Header:**

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

If the token is valid, the user can access their profile.

If the token is missing or invalid, access is denied.

## 5. Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcryptjs
* JSON Web Token (JWT)
* Postman

## 6. How to Run the Project Locally

### Step 1: Install dependencies

```bash
npm install
```

### Step 2: Create `.env`

Create a `.env` file and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### Step 3: Start the server

```bash
npm start
```

The server will run on:

```text
http://localhost:5000
```

## 7. Postman Testing

The authentication module was tested using Postman.

The following tests should be performed:

1. Register a new user using `POST /signup`.
2. Verify that a JWT token is returned.
3. Login using correct credentials with `POST /login`.
4. Test login using incorrect credentials.
5. Copy the JWT token.
6. Access `GET /profile` using the token.
7. Test the protected route without a token and verify that access is denied.
8. Take screenshots of the tests for submission.
