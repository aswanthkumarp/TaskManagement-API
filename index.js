const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes =require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const requestLoggerMiddleware = require('./middlewares/requestLoggerMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(requestLoggerMiddleware);


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to MongoDB");
  }).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
  
  app.use("/api/auth", authRoutes);
app.use("/api/tasks", authMiddleware, taskRoutes);

app.use(errorMiddleware);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
