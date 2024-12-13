const express = require("express");

const app = express();
app.use(express.json()); // Parse JSON request bodies

// Sample route for testing
app.get("/", (req, res) => {
    res.send("Review Rewards System is running!");
});

// New route to handle POST requests to /rewards
app.post("/rewards", (req, res) => {
    const { userId, points } = req.body;

    if (!userId || !points) {
        return res.status(400).send("Missing userId or points in request body");
    }

    // Logic to handle the reward (e.g., save to database)
    // For now, we'll just log the data and send a success response
    console.log(`User ${userId} received ${points} points`);

    res.status(201).send(`Reward recorded for user ${userId}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));