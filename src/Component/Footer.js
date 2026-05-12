import {
  View,
  Text,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
    const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  return (
    // <View style={{}}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        zIndex: 1,
        backgroundColor: "#f7ca4d",
        height: height * 0.07,
        borderRadius: 10,
        elevation: 5, // Android shadow
        shadowColor: "#000", // IOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
      }}
    >
      <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
        <Image
          source={require("../../assets/profile.png")}
          style={{
            width: 30,
            height: 30,
            resizeMode: "center",
            elevation: 5, // Android shadow
            shadowColor: "#000", // IOS shadow
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/heart.png")}
          style={{
            width: 30,
            height: 30,
            resizeMode: "center",
            elevation: 5, // Android shadow
            shadowColor: "#000", // IOS shadow
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/cart.png")}
          style={{
            width: 30,
            height: 30,
            resizeMode: "center",
            elevation: 5, // Android shadow
            shadowColor: "#000", // IOS shadow
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        />
      </TouchableOpacity>
    </View>
    // </View>
  );
};

export default Footer;
