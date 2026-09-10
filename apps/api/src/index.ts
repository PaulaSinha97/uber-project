import express from "express";
import type { HealthResponse } from "@uber/types";

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.get("/health", (_request, response) => {
  const health: HealthResponse = { status: "ok" };
  response.json(health);
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
