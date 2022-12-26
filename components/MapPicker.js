import React, { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { SafeAreaView } from "react-native-safe-area-context";

const MapPicker = () => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.getForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMessage) {
    text = errorMessage;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      {location ? (
        <MapView
          className="w-full h-full"
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Konumum"
          />
        </MapView>
      ) : null}
    </SafeAreaView>
  );
};

export default MapPicker;
