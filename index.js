const dotenv = require("dotenv");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
dotenv.config();

const router = require("./app/router");

const app = express();

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "Guess it!",
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // ça fait une heure
    },
  })
);

app.use(router);

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
