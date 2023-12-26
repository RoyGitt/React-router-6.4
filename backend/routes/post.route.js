import express from "express";
import { getPosts, setPosts, getPost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", setPosts);
router.get("/:id", getPost);

export default router;
