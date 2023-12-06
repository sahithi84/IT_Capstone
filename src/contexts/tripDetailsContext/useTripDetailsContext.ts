import { useContext } from "react";
import { TripContext } from ".";

export function useTripDetailsContext() {
  const values = useContext(TripContext);

  return { ...values };
}
