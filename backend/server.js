const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", () => console.log("database connection failed"));
db.once("open", () => console.log("database connection successful"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) =>
    res.json({ message: "Incorrect api call. Please do /api/{resource}" })
  );
}

app.listen(port, () => {
  console.log("App is running on port " + port);
});
