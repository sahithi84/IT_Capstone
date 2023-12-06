import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import ProtectedWrapper from "../../hoc/ProtectedWrapper";
import { EnterSourceDestinationHeader } from "../EnterSourceDestination/Header";
import axios from "axios";

export function AddFavouriteDriver() {
  const [selectedImages, setSelectedImages] = useState([]);

  const uploadImage = async (imageUri) => {
    try {
      const formData = new FormData();
      formData.append("file", {
        uri: imageUri,
        type: "image/jpeg", // Modify the type if needed
        name: "image.jpg", // Modify the file name if needed
      });
      formData.append("bucketName", "did-testing-bucket-creation"); // Add the bucketName field

      const response = await axios.post(
        "https://o1hs5zzyl7.execute-api.ap-south-1.amazonaws.com/dev/uploadFile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Image uploaded successfully!", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const selectImageFromCamera = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };

    launchCamera(options, (response) => {
      if (!response.didCancel && !response.error) {
        const source = { uri: response.assets[0].uri };
        setSelectedImages([...selectedImages, source]);
        uploadImage(response.assets[0].uri); // Upload the image
      }
    });
  };

  const selectImageFromGallery = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (!response.didCancel && !response.error) {
        const source = { uri: response.assets[0].uri };
        setSelectedImages([...selectedImages, source]);
        uploadImage(response.assets[0].uri); // Upload the image
      }
    });
  };

  return (
    <>
      <EnterSourceDestinationHeader />
      <ProtectedWrapper backgroundColor="#FFEBCD">
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={selectImageFromCamera}>
            {/* Your button/UI code for camera */}
            {/* <Text>Take a Photo</Text> */}
          </TouchableOpacity>

          <TouchableOpacity onPress={selectImageFromGallery}>
            {/* Your button/UI code for gallery */}
            <Text
              style={{
                borderWidth: 1,
                marginVertical: 30,
                paddingHorizontal: 30,
                borderRadius: 20,
              }}
            >
              Upload file
            </Text>
          </TouchableOpacity>

          {selectedImages.map((image, index) => (
            <View key={index} style={{ alignItems: "center" }}>
              <Image
                source={image}
                style={{ width: 300, height: 300, margin: 10 }}
              />
            </View>
          ))}
        </View>
      </ProtectedWrapper>
    </>
  );
}
