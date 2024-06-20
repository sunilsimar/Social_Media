# Threads-YT

## Project Description

Threads-YT is a full-stack social media application built with modern web technologies. The project consists of a front-end built with React and Vite, and a back-end powered by Node.js and Express. It leverages Chakra UI for styling, Recoil for state management, and integrates with Socket.io for real-time communication. The backend uses MongoDB for data storage, bcryptjs for password hashing, and JSON Web Tokens (JWT) for authentication. Cloudinary is used for handling media uploads.

## Installation

### Clone the Repository

```sh
git clone https://github.com/your-username/threads-yt.git
cd threads-yt
```

### Install Dependencies

#### Root

```sh
npm install
```

#### Frontend

```sh
cd frontend
npm install
```

## Running the Project

### Development Mode

#### Frontend

```sh
cd frontend
npm run dev
```

#### Backend

```sh
cd backend
npm run dev
```

### Production Mode

#### Frontend

```sh
cd frontend
npm run build
npm run preview
```

#### Backend

```sh
cd backend
npm start
```

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Chakra UI**: A simple, modular, and accessible component library.
- **Recoil**: State management library for React.
- **Socket.io Client**: Real-time communication library.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **Mongoose**: MongoDB object modeling for Node.js.
- **bcryptjs**: Library to hash passwords.
- **jsonwebtoken**: Library to work with JSON Web Tokens (JWT).
- **Cloudinary**: Service for managing media assets.
- **dotenv**: Module to load environment variables from a .env file.
- **Socket.io**: Real-time communication library.
- **Nodemon**: Tool that helps develop Node.js based applications by automatically restarting the node application when file changes are detected.

## Scripts

### Frontend

- **`dev`**: Starts the development server.
- **`build`**: Builds the application for production.

### Backend

- **`dev`**: Starts the development server with Nodemon.
- **`start`**: Starts the production server.
- **`build`**: Installs dependencies for both frontend and backend, and builds the frontend.

## Configuration

For this project, the configuration values such as database URIs, JWT secrets, and Cloudinary credentials are hardcoded directly in the source code.

Example configuration in `server.js` or related configuration files:

```javascript
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;

const MONGO_URI = 'mongodb+srv://sunilsimar:SunilSimar@cluster0.enuowoj.mongodb.net/Social';
const JWT_SECRET = 'HDHIKDJDNHD23Y787373';
const CLOUDINARY_CLOUD_NAME = 'deg74jfv9';
const CLOUDINARY_API_KEY = '159825165814335';
const CLOUDINARY_API_SECRET = 'L09QQIi0CsiRZtJqyo6C7u7TKkE';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const token = jwt.sign({ id: user._id }, JWT_SECRET, {
  expiresIn: '1h',
});
```

## Learning Takeaways

- Learned to implement secure user authentication and authorization using JWT.
- Gained experience in managing and storing media assets with Cloudinary.
- Improved skills in developing real-time applications using Socket.io.
- Enhanced front-end development skills with React and Chakra UI.
- Learned to manage state efficiently in React applications using Recoil.

---
