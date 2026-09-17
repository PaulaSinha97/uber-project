import express from "express";
import type { HealthResponse } from "@uber/types";
import { rideRoutes } from "./modules/rides/ride.routes.js";

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(express.json());

app.get("/health", (_request, response) => {
  const health: HealthResponse = { status: "ok" };
  response.json(health);
});

app.use("/rides", rideRoutes);

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
