import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CallGetAllProductApi } from "../fetures/AllApiCall";

const DrawerView = ({  navigation }) => { //onClose,
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const handleCloseDrawer = (e) => {
    // onClose(Category);
    //onClose(e);
    console.log(category,"clgggg" )
    if (category === "Men Clothing") {
      console.log("men Clothing")
          dispatch(CallGetAllProductApi("/category/men's clothing"));
        } else if (category === "Women Clothing") {
          dispatch(CallGetAllProductApi("/category/women's clothing"));
        } else if (category === "Electronics") {
          dispatch(CallGetAllProductApi("/category/electronics"));
        } else if (category === "Jewelery") {
          dispatch(CallGetAllProductApi("/category/jewelery"));
        } else if (category === "All Product") {
          dispatch(CallGetAllProductApi());
        } else if (category === "Add Product") {
          navigation.openDrawer();
        }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 60 }}>
      <TouchableOpacity
        style={{ alignSelf: "flex-end", marginRight: 15 }}
        onPress={() => navigation.closeDrawer()}
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

            navigation.navigate("AllProduct");
  navigation.closeDrawer();
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
                       setCategory("Men Clothing");
            handleCloseDrawer("Men Clothing")
            navigation.navigate("AllProduct");
  navigation.closeDrawer();
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
            setCategory("Women Clothing");
            handleCloseDrawer()
            navigation.navigate("AllProduct");
  navigation.closeDrawer();
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
            setCategory("Jewelery");
            handleCloseDrawer()
            navigation.navigate("AllProduct");
  navigation.closeDrawer();
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
            setCategory("Electronics");
            handleCloseDrawer()
            navigation.navigate("AllProduct");
  navigation.closeDrawer();
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

            navigation.getParent().navigate("AddProduct");
  navigation.closeDrawer();
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
          <Button title="close" onPress={() => navigation.closeDrawer()} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerView;
