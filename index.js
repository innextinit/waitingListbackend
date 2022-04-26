require("./config/database.js").connectDB();
const express = require("express");
const cors = require("cors");

const { NODE_ENV } = process.env;

const app = express();

let whitelist = [
  "https://init-waitinglist.herokuapp.com"
];

if (NODE_ENV !== "production") {
  whitelist = [
    ...whitelist,
    "http://localhost:3003",
    "http://127.0.0.1:3003",
    "http://localhost:5000",
    "http://127.0.0.1:5000",
    "http://localhost:8000",
  ];
}

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      console.log(origin);
      callback("Not allowed by CORS", false);
    }
  },
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

// import routers
const docRouter = require("./routes/doc");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const waitingListRouter = require("./routes/list");

// use routers
app.use("/docs", docRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/list", waitingListRouter);

app.use("*", (req, res) => res.status(404).send("not found"));

module.exports = app;
