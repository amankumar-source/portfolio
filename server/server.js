/* global process */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { chatHandler } from "./routes/chat.js";

dotenv.config();
dotenv.config({ path: path.resolve(process.cwd(), ".env") });
dotenv.config({ path: path.resolve(process.cwd(), "server/.env") });
dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API route
app.post("/api/chat", chatHandler);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Aman AI Assistant Backend" });
});

app.listen(PORT, () => {
  const hasKey = !!(process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY);
  console.log(`🚀 Aman AI Assistant Express Server running on http://localhost:${PORT}`);
  console.log(`🔑 Groq API Key Status: ${hasKey ? "ACTIVE & LOADED ✅" : "MISSING ❌ (Check .env file)"}`);
});
