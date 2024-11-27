const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Enable CORS for frontend
app.use(cors());

// Sample messages data (simulating a database)
const messages = [
  {
    id: 1,
    title:
      "November 11, 2024: A Comprehensive Online Labor Laws and Standards Orientation and Review",
    content: "Details of the message for Wews...",
  },
  {
    id: 2,
    title: "May 14, 2024: Career Development Talk 2024",
    content: "Details of the Career Development Talk 2024...",
  },
];

// Default route for `/`
app.get("/", (req, res) => {
  res.send(
    "Welcome to the backend server. Use /api/messages to fetch messages."
  );
});

// API route to get messages
app.get("/api/messages", (req, res) => {
  res.json(messages); // Respond with the messages
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
