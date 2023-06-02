const express = require("express");
const app = express();
const colors = require("colors");
const connectDb = require("./config/dbConfig");
const dotenv = require("dotenv");


//dotenv conig
dotenv.config();
connectDb()

app.use(express.json());
const employeeRoute = require("./routes/employeeRoute");
const studentRoute = require("./routes/studentRoute");
const resultsRoute = require("./routes/resultsRoute");

app.use("/api/employee/", employeeRoute);
app.use("/api/student/", studentRoute);
app.use("/api/results/", resultsRoute);


const port = process.env.PORT || 4001;

// deployment config
const path = require("path");

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});