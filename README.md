# Flight Booking Backend

This is the backend part of a full-stack web application for searching flights, viewing available options. It provides a RESTful API for user authentication, flight management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication with JWT
- Role-Based Access Control (User, Admin)
- Flight Search and Management
- Input Validation and Error Handling

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB.
- **bcrypt**: Library for hashing passwords.
- **JSON Web Tokens (JWT)**: For secure authentication.

## Installation

To set up the backend project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/JithanRoy/flight-booking-system-backend.git
   cd flight-booking-backend
   
2. **Install Dependencies**
    bun install or any other package manager like npm or yarn

3. **Set Up Environment Variables**
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    PORT=5000

4. **Start the Server**
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    PORT=5000

## Usage

- **User Registration and Login**: 
  - Secure user authentication with JWT.

- **Flight Management**: 
  - Admins can add, update, or delete flights.

- **Booking Management**: 
  - Users can create and view bookings.

## API Endpoints

### User Endpoints

- **POST /api/register**: 
  - Register a new user.

- **POST /api/login**: 
  - Authenticate a user and provide a JWT token.

### Flight Endpoints

- **GET /api/flights**: 
  - Retrieve a list of all available flights.

- **GET /api/flights/search**: 
  - Retrieve flights based on search criteria.

- **POST /api/flights**: 
  - Add a new flight (Admin only).

- **PUT /api/flights/:id**: 
  - Update flight details (Admin only).

- **DELETE /api/flights/:id**: 
  - Delete a flight (Admin only).


## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## FAQ
Frequently asked questions about the project will be listed here.

## Contact
For any inquiries or support, please contact jithanroyjony@gmail.com.

## Live Link
https://flight-booking-system-backend-9jvl.onrender.com