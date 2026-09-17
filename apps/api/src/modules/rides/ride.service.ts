import { randomUUID } from "node:crypto";
import type { CreateRideRequest, Ride } from "./ride.types.js";

const rides: Ride[] = [];

export function createRide(request: CreateRideRequest): Ride {
  const ride: Ride = {
    id: randomUUID(),
    pickup: request.pickup,
    destination: request.destination,
    status: "REQUESTED",
  };

  rides.push(ride);
  return ride;
}
