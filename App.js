import { View } from "react-native";
import AllProduct from "./src/Component/AllProducts";
import UserAuth from "./src/Component/UserAuth";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import AllApp from "./AllApp";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <AllProduct /> */}
      <Provider store={store}>
        <AllApp />
      </Provider>
    </View>
  );
}
