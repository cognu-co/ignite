import express from "express";

const app = express();
// MIDDLEWARES
app.use(express.json());

app.get("/", (_request, response) => response.json({ ok: true }));

app.listen(3333, () => console.log("Server is running on port 3333"));

export default app;
