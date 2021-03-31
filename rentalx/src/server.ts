import express from "express";

import { routes } from "./routes";

const app = express();
// MIDDLEWARES
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));

export default app;
