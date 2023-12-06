import { useState, useEffect } from "react";

export const useCountryAnimals = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const mockCountryData = [
      {
        name: "USA",
        latitude: 37.0902,
        longitude: -95.7129,
        species: [
          {
            name: "Bald Eagle",
            imageUrl: "https://via.placeholder.com/150?text=Bald+Eagle",
          },
        ],
      },
      {
        name: "Canada",
        latitude: 56.1304,
        longitude: -106.3468,
        species: [
          {
            name: "Beaver",
            imageUrl: "https://via.placeholder.com/150?text=Beaver",
          },
        ],
      },
      {
        name: "Australia",
        latitude: -25.2744,
        longitude: 133.7751,
        species: [
          {
            name: "Kangaroo",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kangaroo_Australia_01_11_2008_-_retouch.JPG/300px-Kangaroo_Australia_01_11_2008_-_retouch.JPG",
          },
        ],
      },
      // Add more countries and animal data here
    ];

    setCountriesData(mockCountryData);
    setLoading(false);
  }, []);

  return { countriesData, loading };
};
