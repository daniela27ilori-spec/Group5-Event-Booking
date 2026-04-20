import express from "express";

const app = express();
const PORT = 5000;

// Middleware: lets the server read JSON bodies (req.body)
app.use(express.json());

// Endpoint: quick test that backend is running
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});