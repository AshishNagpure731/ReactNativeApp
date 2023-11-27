import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

const AddNewUser = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Password, setPassword] = useState("");
  const [city, setcity] = useState("");
  const [street, setstreet] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const addnewUser = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email, //"John12@gmail.com",
      username: username, //"johnduu",
      password: Password, //"m38rmF$55",

      name: {
        firstname: Fname, //"Johnuuu",
        lastname: Lname, //"Doe",
      },
      address: {
        city: city, //"kilcoole",
        street: street, //"7835 new road",
        number: 3,
        zipcode: zipcode, //"12926-3874",
        geolocation: {
          lat: "",
          long: "",
        },
      },
      phone: phone, //"1-570-236-7033",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("https://fakestoreapi.com/users", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(e) => setemail(e)}
        />

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(e) => setusername(e)}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(e) => setPassword(e)}
        />
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.halfInput}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={(e) => setFname(e)}
          />
        </View>
        <View style={styles.halfInput}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={(e) => setLname(e)}
          />
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.halfInput}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            onChangeText={(e) => setcity(e)}
          />
        </View>
        <View style={styles.halfInput}>
          <Text style={styles.label}>Zip code</Text>
          <TextInput
            style={styles.input}
            placeholder="Zip Code"
            onChangeText={(e) => setzipcode(e)}
          />
        </View>
      </View>

      <Text style={styles.label}>Street</Text>
      <TextInput
        style={styles.input}
        placeholder="Street"
        onChangeText={(e) => setstreet(e)}
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={(e) => setaddress(e)}
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={(e) => setphone(e)}
      />

      <Button
        title="Sign Up"
        onPress={() => {
          addnewUser();
          alert("Successfully Registered");
          navigation.navigate("UserAuth");
        }}
      />

      <Text style={styles.signupLink}>
        Already have an account?
        <Text
          style={{ fontSize: 19, color: "blue" }}
          onPress={() => navigation.navigate("UserAuth")}
        >
          {" "}
          Log In
        </Text>{" "}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#f1f1f1",
    width: "100%",
    height: 40,
    marginBottom: 20,
    paddingLeft: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  halfInput: {
    flex: 1,
    marginRight: 6,
  },

  signupLink: {
    fontSize: 17,
    // color: "blue",
    marginTop: 20,
  },
});

export default AddNewUser;
