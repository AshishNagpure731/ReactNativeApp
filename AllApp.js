import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserAuth from "./src/Component/UserAuth";
import AddNewUser from "./src/Component/AddNewUser";
import AllProduct from "./src/Component/AllProducts";
import AddProduct from "./src/Component/AddProduct";
import Drawer from "./src/Component/Drawer";
import ProductDetails from "./src/Component/ProductDetails";

const Stack = createStackNavigator();

// export default function AllApp() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={UserAuth} />
//         <Stack.Screen name="AddNewUser" component={AddNewUser} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
export default function AllApp() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="UserAuth">
        <Stack.Screen 
          name="MainDrawer" 
          component={Drawer} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="UserAuth" component={UserAuth} />
        <Stack.Screen name="AddNewUser" component={AddNewUser} />
        <Stack.Screen name="AllProduct" component={AllProduct} />
        <Stack.Screen options={{ headerShown: true }} name="AddProduct" component={AddProduct} />
        <Stack.Screen options={{ headerShown: true }} name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
