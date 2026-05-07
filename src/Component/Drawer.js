import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerView from "./DrawerView";
import AddProduct from "./AddProduct";
import AllProducts from "./AllProducts"
const DrawerStack = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerStack.Navigator
      screenOptions={{ drawerPosition: "right" }}
      drawerContent={(props) => <DrawerView {...props} />}
    >
      <DrawerStack.Screen name="AllProduct" component={AllProducts} />
      {/* <DrawerStack.Screen name="AddProduct" component={AddProduct} /> */}
    </DrawerStack.Navigator>
  );
};

export default Drawer