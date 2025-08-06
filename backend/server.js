const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors"); // <-- Add this
const userRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors({
  origin: "http://localhost:5173", // Allow frontend to talk to backend
  credentials: true, // Required to allow cookies
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    