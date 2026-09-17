import { Router } from "express";
import { createRideController } from "./ride.controller.js";

export const rideRoutes = Router();

rideRoutes.post("/", createRideController);
