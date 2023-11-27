import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callUserAuthApi } from "../fetures/AllApiCall";

export default function UserAuth({ navigation }) {
  const [Password, SetPassword] = useState("Password");
  const [UserName, setUserName] = useState("Username");

  const dispatch = useDispatch();
  const data = useSelector((e) => {
    return e.app.token;
  });

  const login = () => {
    var raw = JSON.stringify({
      username: UserName, //"mor_2314",
      password: Password, //"83r5^_",
    });
    dispatch(callUserAuthApi(raw));
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          //   borderWidth: 6,
          height: 250,
          justifyContent: "center",
          //   width: 300,
        }}
      >
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>Sign in </Text>
        <Text style={{ fontSize: 25, marginBottom: 10, marginTop: 27 }}>
          Username
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            backgroundColor: "#f1f1f1",

            width: 280,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
          placeholder="  UserName"
          //   defaultValue={UserName}
          onChangeText={(e) => setUserName(e)}
        />
        <Text style={{ fontSize: 25, marginBottom: 10 }}>Password</Text>
        <TextInput
          style={{
            borderWidth: 1,
            backgroundColor: "#f1f1f1",

            width: 280,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
          placeholder="  Password"
          defaultValue=""
          onChangeText={(e) => {
            SetPassword(e);
          }}
          secureTextEntry
        />
        <Button
          title="LogIn"
          onPress={() => {
            login();
            data === undefined
              ? alert("Incorrect Username Or Password")
              : navigation.navigate("AllProduct");
          }}
        />
        <Text>
          Don't have account{" "}
          <Text
            style={{ fontSize: 17, color: "blue" }}
            onPress={() => navigation.navigate("AddNewUser")}
          >
            SignUp
          </Text>{" "}
        </Text>
      </View>
    </View>
  );
}

// export default UserAuth;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 10,
  },
});
