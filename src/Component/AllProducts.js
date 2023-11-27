import { StatusBar } from "expo-status-bar";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { DrawerLayoutAndroid } from "react-native-gesture-handler";
import DrawerView from "./DrawerView";
import { useDispatch, useSelector } from "react-redux";
import { CallGetAllProductApi } from "../fetures/AllApiCall";

export default function AllProduct({ navigation }) {
  const dispatch = useDispatch();

  const data = useSelector((e) => {
    return e.list.data;
  });
  const drawer = useRef(null);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    apirequest();
  }, []);

  const apirequest = () => {
    dispatch(CallGetAllProductApi());
  };
  const closeDrawer = (category) => {
    if (category === "Men Clothing") {
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
      navigation.navigate("AddProduct");
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
    >
      <View style={{ marginTop: 50 }}>
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
        <ScrollView>
          <View style={styles.container}>
            {data ? (
              data.map((e) => {
                return (
                  <View
                    style={{
                      display: "flex",
                      borderWidth: 1,
                      borderColor: "#e6e6e6",
                      // margin: 4,
                      flexDirection: "row",
                      alignItems: "center",
                      height: 300,
                    }}
                    key={e.id}
                  >
                    <Image
                      source={{ uri: e.image }}
                      style={{ width: 150, height: 200, resizeMode: "contain" }}
                    />
                    <View
                      style={{
                        marginLeft: 8,
                        flex: 1,
                        marginTop: 2,
                        height: 300,
                        backgroundColor: "#f1f1f1",
                        // margin: ,
                      }}
                    >
                      {/* Use another View to contain text and set flex: 1 to take the remaining space */}
                      <Text
                        style={{ fontSize: 17, marginBottom: 4, margin: 7 }}
                      >
                        {e.title}
                      </Text>
                      <Text
                        style={{ fontSize: 22, marginBottom: 4, margin: 7 }}
                      >
                        ₹{e.price}
                      </Text>
                      <Text
                        style={{ fontSize: 15, marginBottom: 4, margin: 7 }}
                      >
                        Category: {e.category}
                      </Text>
                      <Text
                        style={{ fontSize: 15, marginBottom: 4, margin: 7 }}
                      >
                        {e.description.slice(0, 150)}...
                        <Text
                          style={{ color: "orange" }}
                          // onPress={}
                        >
                          More
                        </Text>
                      </Text>
                    </View>
                    {/* <Button
                      title="Open drawer"
                      onPress={() => drawer.current.openDrawer()}
                    /> */}
                  </View>
                );
              })
            ) : (
              <></>
            )}
          </View>
        </ScrollView>
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
