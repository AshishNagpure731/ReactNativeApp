import {
  View,
  Text,
  Image,
  Button,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

const ProductDetails = () => {
  const { width, height } = useWindowDimensions();
  // const dispach = useDispatch()
  console.log(width, height);
  const data = useSelector((e) => {
    return e.productId.data;
  });
  return (
    <View style={{ flex: 1, margin: 6 }}>
      {data ? (
        <>
          <View style={{ flex: 2, justifyContent: "space-evenly" }}>
            <Text style={{ fontWeight: "bold", fontSize: width * 0.045 }}>
              {data.title}
            </Text>
            <Image
              source={{ uri: data.image }}
              style={{
                width: "auto",
                height: height * 0.3,
                resizeMode: "center",
                // borderWidth:2,
                elevation: 5, // Android shadow
                  shadowColor: "#000", // IOS shadow
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
              }}
            />
          </View>
          <View style={{ flex: 2, justifyContent: "space-evenly" }}>
            <Text style={{ fontSize: width * 0.09 }}>₹{data.price}</Text>
            <Text>Rating: {data.rating.rate} Out of 5</Text>
            <Text style={{ fontSize: width * 0.045 }}>
              Category: {data.category}
            </Text>
            <Text style={{ fontSize: width * 0.042 }}>
              Description: {data.description}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#f7ca4d",
                  borderRadius: 10,
                  width: width * 0.38,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  elevation: 5, // Android shadow
                  shadowColor: "#000", // IOS shadow
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                }}
                activeOpacity={0.7}
                onPress={() => {}}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  Add to Cart
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#f7ca4d",
                  borderRadius: 10,
                  width: width * 0.38,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  elevation: 5,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                }}
                activeOpacity={0.7}
                onPress={() => {}}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  Buy Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default ProductDetails;
