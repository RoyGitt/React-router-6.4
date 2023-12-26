import express from "express";
import postRouter from "./routes/post.route.js";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(3000, () => {
  console.log("Server running at port 3000");
});

app.use("/api/posts", postRouter);
