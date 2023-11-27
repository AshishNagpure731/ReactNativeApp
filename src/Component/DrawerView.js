import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

const DrawerView = ({ onClose, navigation }) => {
  const [Category, setCategory] = useState("");
  const handleCloseDrawer = (e) => {
    // onClose(Category);
    onClose(e);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 60 }}>
      <TouchableOpacity
        style={{ alignSelf: "flex-end", marginRight: 15 }}
        onPress={handleCloseDrawer}
      >
        <Image
          source={require("../../assets/close.png")}
          style={{
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
      <View style={{ display: "flex", flexDirection: "column" }}>
        <TouchableOpacity
          onPress={() => {
            // setCategory("Men Clothing");
            handleCloseDrawer("All Product");
          }}
        >
          <Text
            style={{
              marginTop: 15,
              backgroundColor: "#f7ca4d",
              width: 300,
              fontSize: 22,
            }}
          >
            All Product
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // setCategory("Men Clothing");
            handleCloseDrawer("Men Clothing");
          }}
        >
          <Text
            style={{
              marginTop: 15,
              backgroundColor: "#f7ca4d",
              width: 300,
              fontSize: 22,
            }}
          >
            Men Clothing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // setCategory("Women Clothing");
            handleCloseDrawer("Women Clothing");
          }}
        >
          <Text
            style={{
              marginTop: 15,
              backgroundColor: "#f7ca4d",
              width: 300,
              fontSize: 22,
            }}
          >
            Women Clothing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // setCategory("Jewelery");
            handleCloseDrawer("Jewelery");
          }}
        >
          <Text
            style={{
              marginTop: 15,
              backgroundColor: "#f7ca4d",
              width: 300,
              fontSize: 22,
            }}
          >
            Jewelery
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // setCategory("Electronics");
            handleCloseDrawer("Electronics");
          }}
        >
          <Text
            style={{
              marginTop: 15,
              backgroundColor: "#f7ca4d",
              width: 300,
              fontSize: 22,
            }}
          >
            Electronics
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // setCategory("Electronics");
            handleCloseDrawer("Add Product");
          }}
        >
          <Text
            style={{
              marginTop: 15,
              backgroundColor: "#f7ca4d",
              width: 300,
              fontSize: 22,
            }}
          >
            Add Product
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 15 }}>
          <Button title="close" onPress={handleCloseDrawer} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerView;
