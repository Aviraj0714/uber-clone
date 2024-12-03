# Uber Clone Backend

This is the backend service for the Uber clone application, built using Node.js and MongoDB. The application includes user and captain management functionalities.

## Table of Contents

- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Services](#services)
  - [User  Service](#user-service)
  - [Captain Service](#captain-service)
- [Controllers](#controllers)
  - [Captain Controller](#captain-controller)
- [Models](#models)
  - [User  Model](#user-model)
  - [Captain Model](#captain-model)
  - [Blacklist Token Model](#blacklist-token-model)
- [Database Connection](#database-connection)

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Set up your environment variables, including `DB_CONNECT` and `JWT_SECRET`.
5. Run the application using `node index.js` or the appropriate entry file.


## Services

### User Service

- **File**: `services/user.service.js`

#### Functions

- `createUser ({ firstname, lastname, email, password })`
  - **Role**: Creates a new user in the database. It checks for required fields and throws an error if any are missing.

### Captain Service

- **File**: `services/captain.service.js`

#### Functions

- `hashPassword(password)`
  - **Role**: Hashes the provided password using bcrypt for secure storage.
  
- `createCaptain({ firstname, lastname, email, password, color, plate, capacity, vehicleType })`
  - **Role**: Creates a new captain in the database. It checks for required fields and throws an error if any are missing.

## Controllers

### Captain Controller

- **File**: `controllers/captain.controller.js`

#### Functions

- `registerCaptain(req, res, next)`
  - **Role**: Handles the registration of a captain. Validates input, checks for existing captains, hashes the password, creates a new captain, and generates an authentication token.

## Models

### User Model

- **File**: `models/user.model.js`

#### Schema Fields

- `fullname` (Object)
  - `firstname` (String, required)
  - `lastname` (String)
  
- `email` (String, required, unique)
- `password` (String, required, select: false)
- `socketId` (String)

#### Methods

- `genrateAuthToken()`
  - **Role**: Generates a JWT token for user authentication.
  
- `comparePassword(password)`
  - **Role**: Compares a provided password with the stored hashed password.

- `hashPassword(password)`
  - **Role**: Static method to hash a password.

### Captain Model

- **File**: `models/caption.model.js`

#### Schema Fields

- `fullname` (Object)
  - `firstname` (String, required)
  - `lastname` (String)

- `email` (String, required, unique)
- `password` (String, required, select: false)
- `vehicle` (Object)
  - `color` (String, required)
  - `capacity` (Number, required)
  - `plate` (String, required)
  - `vehicleType` (String, required)

#### Methods

- `genrateAuthToken()`
  - **Role**: Generates a JWT token for captain authentication.

- `comparePassword(password)`
  - **Role**: Compares a provided password with the stored hashed password.

- `hashPassword(password)`
  - **Role**: Static method to hash a password.

### Blacklist Token Model

- **File**: `models/blacklistToken.js`

#### Schema Fields

- `token` (String, required, unique)
- `createdAt` (Date, default: Date.now, expires in 24 hours)

## Database Connection

- **File**: `db/db.js`

#### Functions

- `connectToDb()`
  - **Role**: Connects to MongoDB using Mongoose and logs the connection status.

## Contributing

Contributions are welcome! Please feel free to submit a pull


