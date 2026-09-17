import type { Request, Response } from "express";
import { createRide } from "./ride.service.js";
import type { CreateRideRequest } from "./ride.types.js";

export function createRideController(
  request: Request<unknown, unknown, CreateRideRequest>,
  response: Response,
) {
  const ride = createRide(request.body);
  response.status(201).json(ride);
}
