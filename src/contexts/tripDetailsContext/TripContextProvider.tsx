import { TripContext } from ".";
import { useTripDetails } from "../../hooks/tripDetails/useTripDetails";

export const TripContextProvider = ({ children }: any) => {
  const { tripDataToBeDecideUI } = useTripDetails();
  const value = { tripDataToBeDecideUI };

  return (
    <TripContext.Provider value={{ ...value }}>{children}</TripContext.Provider>
  );
};
