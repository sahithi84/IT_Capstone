import React from "react";
import { CurrentLocationMarker } from "./CurrentLocationMarker";

import { FallBackMap } from "./FallBackMap";
import { useSelector } from "react-redux";

export const DynamicMap = ({
  origin,
  setClickedCoordinates,
  handleOpenFilterModal,
  clickedCoordinates,
  formData,
}: any) => {
  const { currentLocation } = useSelector((state) => state?.currentLocation);

  return (
    <>
      {currentLocation?.latitude && currentLocation?.longitude ? (
        <CurrentLocationMarker
          setClickedCoordinates={setClickedCoordinates}
          handleOpenFilterModal={handleOpenFilterModal}
        />
      ) : (
        <FallBackMap
          origin={origin}
          setClickedCoordinates={setClickedCoordinates}
          handleOpenFilterModal={handleOpenFilterModal}
          clickedCoordinates={clickedCoordinates}
          formData={formData}
        />
      )}
    </>
  );
};
