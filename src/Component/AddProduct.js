import { View, Text, Image, Button } from "react-native";
import React, { useLayoutEffect, useRef, useState } from "react";
import {
  DrawerLayoutAndroid,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import AllProduct from "./AllProducts";
import DrawerView from "./DrawerView";
import { useDispatch } from "react-redux";
import { CallGetAllProductApi } from "../fetures/AllApiCall";

const AddProduct = ({ navigation }) => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const [price, setprice] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const drawer = useRef(null);

  const addtheProduct = ({ navigation }) => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: title, //"test product",
        price: price, //13.5,
        description: desc, //"lorem ipsum set",
        image: image,
        category: category,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.id !== 0) {
          alert("your product is added");
        }
      });
  };
  const closeDrawer = (category) => {
    if (category === "Men Clothing") {
      dispatch(CallGetAllProductApi("/category/men's clothing"));
      navigation.navigate("AllProduct");
    } else if (category === "Women Clothing") {
      dispatch(CallGetAllProductApi("/category/women's clothing"));
      navigation.navigate("AllProduct");
    } else if (category === "Electronics") {
      dispatch(CallGetAllProductApi("/category/electronics"));
      navigation.navigate("AllProduct");
    } else if (category === "Jewelery") {
      dispatch(CallGetAllProductApi("/category/jewelery"));
      navigation.navigate("AllProduct");
    } else if (category === "All Product") {
      dispatch(CallGetAllProductApi());
      navigation.navigate("AllProduct");
    } else if (category === "Add Product") {
      //   navigation.navigate("AddProduct");
      drawer.current.closeDrawer();
    }
    drawer.current.closeDrawer();
  };
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="right"
      renderNavigationView={() => (
        // viewDrawer
        <DrawerView onClose={closeDrawer} />
      )}
      style={{ marginTop: 60 }}
    >
      <View
        style={{
          height: 40,
          backgroundColor: "white",

          backgroundColor: "#f7ca4d",
          justifyContent: "center",
          display: "flex",
          // flexDirection: "row",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              alignSelf: "flex-start",
              fontSize: 33,
              // fontFamily: "Roboto",
              color: "#383838",
            }}
          >
            Products
          </Text>
          <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
            <Image
              source={require("../../assets/drawer.png")}
              style={{
                width: 50,
                height: 50,
                marginLeft: 4,
                alignSelf: "flex-end",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{ backgroundColor: "#d6d6d6" }}>
        <View>
          <View style={{ margin: 15 }}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/Add.png")}
                style={{ height: 150, width: 150, resizeMode: "contain" }}
              />
            </TouchableOpacity>

            <View style={{ marginTop: 30 }}>
              <Text style={{ fontSize: 30 }}>About Product</Text>
            </View>
            <View
              style={{
                marginTop: 30,
                // borderWidth: 1,
                height: 390,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 20 }}>Product Title</Text>
              <TextInput
                placeholder=""
                style={{ borderWidth: 1 }}
                onChangeText={(e) => settitle(e)}
              />
              <Text style={{ fontSize: 20 }}>Product Price</Text>
              <TextInput
                placeholder=""
                style={{ borderWidth: 1, height: 30 }}
                onChangeText={(e) => setprice(e)}
              />
              <Text style={{ fontSize: 20 }}>Product Category</Text>
              <TextInput
                placeholder=""
                style={{ borderWidth: 1 }}
                onChangeText={(e) => setcategory(e)}
              />
              <Text style={{ fontSize: 20 }}>Product Description</Text>
              <TextInput
                placeholder=""
                style={{ borderWidth: 1 }}
                onChangeText={(e) => setdesc(e)}
              />
              <Button title="Submit" onPress={addtheProduct} />
            </View>
          </View>
        </View>
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};

export default AddProduct;
