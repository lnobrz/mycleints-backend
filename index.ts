import express from "express";

const authRoutes = require("./routes/auth");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(authRoutes);

app.listen(8080, () => {
  console.log("app now listening for requests on port 8080");
});
