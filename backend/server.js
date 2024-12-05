const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const formRoutes = require("./routes/formRoutes");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/formBuilder", { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/api/forms", formRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
