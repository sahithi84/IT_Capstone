import { EvLuxImg, EvsedanCarImg, FiveStarEmoji } from "../svgs";

export const getIconByVehicleName = (vehicleId: any) => {
  switch (vehicleId) {
    case "6401ae927e59316793278c4d":
      return <EvsedanCarImg />;
    case "6500387a96704a2780f91add":
      return <EvLuxImg />;
    case "642be239a95ab6cb2b294e85":
      return <EvsedanCarImg />;
    case "6401b3297e59316793278e12":
      return <EvsedanCarImg />;
    case "6401af057e59316793278c69":
      return <EvsedanCarImg />;
    default:
      return <EvsedanCarImg />;
  }
};

export function reorderVehicleTypes(
  vehicleTypes: any,
  targetVehicleName: any,
  targetIndex: any
) {
  const updatedVehicleTypes = [...vehicleTypes];
  const targetItem = updatedVehicleTypes?.find(
    (item) => item?.vehicleName === targetVehicleName
  );

  if (targetItem) {
    updatedVehicleTypes.splice(updatedVehicleTypes.indexOf(targetItem), 1);
    updatedVehicleTypes.splice(targetIndex, 0, targetItem);
  }

  return updatedVehicleTypes;
}

export const carRentals = [
  {
    Place: "Airport",
    rentTimeWithKms: "4 Hrs 40Kms",
    rentTimeInMins: "240.00Mins & 40.00Kms",
    estimatedPrice: "1500",
    isSelected: false,
  },
  {
    Place: "Airport",
    rentTimeWithKms: "8 Hrs 80Kms",
    rentTimeInMins: "480.00Mins & 80.00Kms",
    estimatedPrice: "1500",
    isSelected: false,
  },
  {
    Place: "Airport",
    rentTimeWithKms: "4 Hrs 40Kms",
    rentTimeInMins: "240.00Mins & 40.00Kms",
    estimatedPrice: "1500",
    isSelected: false,
  },
  {
    Place: "Airport",
    rentTimeWithKms: "4 Hrs 40Kms",
    rentTimeInMins: "240.00Mins & 40.00Kms",
    estimatedPrice: "1500",
    isSelected: false,
  },
];
export const tabsList = [
  {
    title: "Now",
    isSelected: true,
  },
  {
    title: "Rental",
    isSelected: false,
  },
];

export const rentalOption = [
  {
    title: "Rent Know",
    isSelected: true,
  },
  {
    title: "Cancle",
    isSelected: false,
  },
];
