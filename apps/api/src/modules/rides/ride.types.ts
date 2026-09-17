export type RideStatus = "REQUESTED";

export type CreateRideRequest = {
  pickup: string;
  destination: string;
};

export type Ride = CreateRideRequest & {
  id: string;
  status: RideStatus;
};
