import express from "express";

const app = express();
// MIDDLEWARES
app.use(express.json());

app.get("/", (_request, response) => response.json({ ok: true }));

app.post("/courses", (request, response) => {
  const { name } = request.body;

  return response.json({ course: name });
});

app.listen(3333, () => console.log("Server is running on port 3333"));

export default app;
