const express = require('express');
const mongoose = require('mongoose');

// Create an Express app
const app = express();
const PORT = 3000; // You can change the port as needed

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());

// Define routes
// For simplicity, I'll show only the route for user registration
app.post('/register', (req, res) => {
  // Here, you can handle the logic for user registration
  // Retrieve the user data from req.body and save it to MongoDB
  // Example:
  const { username, password } = req.body;
  const user = new User({ username, password });
  user.save()
    .then(() => res.status(201).json({ message: 'User registered successfully' }))
    .catch((error) => res.status(500).json({ error: 'Failed to register user' }));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Import the User model
const User = require('./User');

// Registration route
app.post('/register', (req, res) => {
  // Registration logic
});

// Login route
app.post('/login', (req, res) => {
  // Retrieve the login credentials from req.body
  const { username, password } = req.body;
  
  // Find the user in the database
  User.findOne({ username })
    .then((user) => {
      // If user not found or password is incorrect
      if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Senha ou usuário incorretos' });
      }
      
      // Generate a token or session for authentication
      // You can use packages like jsonwebtoken to generate tokens
      // Example:
      const token = generateToken(user._id);
      
      // Return the token as a response
      res.status(200).json({ token });
    })
    .catch((error) => res.status(500).json({ error: 'Ocorreu um erro' }));
});

// Authentication middleware
function authenticateToken(req, res, next) {
  // Retrieve the token from request headers or cookies
  const token = req.headers.authorization || req.cookies.token;
  
  // Verify the token
  // You can use packages like jsonwebtoken to verify tokens
  // Example:
  try {
    const decoded = verifyToken(token);
    
    // Set the user ID or user object on the request
    req.user = decoded.userId;
    
    // Proceed to the next middleware or route
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Protected route example
app.get('/protected', authenticateToken, (req, res) => {
  // Only authenticated users can access this route
  res.json({ message: 'Protected route accessed' });
});
