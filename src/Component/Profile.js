import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image
} from "react-native";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { callParticularProductDetialApi } from "../fetures/AllApiCall";

const Profile = ({navigation}) => {
  const { width, height } = useWindowDimensions();
  const [seeProductDetails, setseeProductDetails] = useState()
  const data = useSelector((e) => {
    // console.log(e.list.data[0].category)
    return e.list.data;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if(seeProductDetails){
      dispatch(callParticularProductDetialApi(seeProductDetails))
      navigation.navigate("ProductDetails")
    }
  
    return () => {
      setseeProductDetails()
    }
  }, [seeProductDetails])
  
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flex: 3,}}>
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: width * 0.06,
            color: "#222",
            fontSize: 18,
            letterSpacing: 0.5,
          }}
        >
          Hello, Name
        </Text>
        <View
          style={{
            flex: 2,
            top: 4,
            flexDirection: "row",
            justifyContent: "space-evenly",
            // borderWidth:2,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: width * 0.27,
              height: height * 0.06,

              justifyContent: "center",
              alignItems: "center",

              backgroundColor: "rgba(255,255,255,0.75)",

              borderRadius: 35,

              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.08)",

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.12,
              shadowRadius: 10,

              elevation: 6,
            }}
          >
            <Text
              style={{
                color: "#222",
                fontSize: 18,
                fontWeight: "bold",
                letterSpacing: 0.5,
              }}
            >
              Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: width * 0.27,
              height: height * 0.06,

              justifyContent: "center",
              alignItems: "center",

              backgroundColor: "rgba(255,255,255,0.75)",

              borderRadius: 35,

              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.08)",

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.12,
              shadowRadius: 10,

              elevation: 6,
            }}
          >
            <Text
              style={{
                color: "#222",
                fontSize: 18,
                fontWeight: "bold",
                letterSpacing: 0.5,
              }}
            >
              Wishlist
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: width * 0.27,
              height: height * 0.06,

              justifyContent: "center",
              alignItems: "center",

              backgroundColor: "rgba(255,255,255,0.75)",

              borderRadius: 35,

              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.08)",

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.12,
              shadowRadius: 10,

              elevation: 6,
            }}
          >
            <Text
              style={{
                color: "#222",
                fontSize: 18,
                fontWeight: "bold",
                letterSpacing: 0.5,
              }}
            >
              Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View
        style={{
          flexDirection: "row",
          flex: 3,
          justifyContent: "space-evenly",
          borderWidth: 2,
        }}
      > */}
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          flexGrow: 3,
          justifyContent: "space-evenly",
          width: width * 3,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: width * 0.45,
            height: height * 0.06,

            justifyContent: "center",
            alignItems: "center",

            backgroundColor: "rgba(255,255,255,0.75)",

            borderRadius: 35,

            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.08)",

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.12,
            shadowRadius: 10,

            elevation: 6,
          }}
        >
          <Text
            style={{
              color: "#222",
              fontSize: 18,
              fontWeight: "bold",
              letterSpacing: 0.5,
            }}
          >
            Login & Security
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: width * 0.45,
            height: height * 0.06,

            justifyContent: "center",
            alignItems: "center",

            backgroundColor: "rgba(255,255,255,0.75)",

            borderRadius: 35,

            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.08)",

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.12,
            shadowRadius: 10,

            elevation: 6,
          }}
        >
          <Text
            style={{
              color: "#222",
              fontSize: 18,
              fontWeight: "bold",
              letterSpacing: 0.5,
            }}
          >
            Your Address
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: width * 0.45,
            height: height * 0.06,

            justifyContent: "center",
            alignItems: "center",

            backgroundColor: "rgba(255,255,255,0.75)",

            borderRadius: 35,

            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.08)",

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.12,
            shadowRadius: 10,

            elevation: 6,
          }}
        >
          <Text
            style={{
              color: "#222",
              fontSize: 18,
              fontWeight: "bold",
              letterSpacing: 0.5,
              textAlign: "center",
            }}
          >
            Review Your Purchase
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: width * 0.45,
            height: height * 0.06,

            justifyContent: "center",
            alignItems: "center",

            backgroundColor: "rgba(255,255,255,0.75)",

            borderRadius: 35,

            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.08)",

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.12,
            shadowRadius: 10,

            elevation: 6,
          }}
        >
          <Text
            style={{
              color: "#222",
              fontSize: 18,
              fontWeight: "bold",
              letterSpacing: 0.5,
            }}
          >
            Devices
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: width * 0.45,
            height: height * 0.06,

            justifyContent: "center",
            alignItems: "center",

            backgroundColor: "rgba(255,255,255,0.75)",

            borderRadius: 35,

            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.08)",

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.12,
            shadowRadius: 10,

            elevation: 6,
          }}
        >
          <Text
            style={{
              color: "#222",
              fontSize: 18,
              fontWeight: "bold",
              letterSpacing: 0.5,
            }}
          >
            Profile Detail
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {/* </View> */}
      <View style={{ flex: 3,  }}> 
        <View style={{flex:2}}>
          <Text
            style={{
              color: "#222",
              fontSize: 18,
              fontWeight: "bold",
              letterSpacing: 0.5,
            }}
          >
            Recently Buyed
          </Text>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={{flexGrow:2,width:width*3,
        justifyContent:'space-evenly'}}>
          {data === null || data === undefined ? (
            <></>
          ) : (
            data.filter((e,i)=>i<5).map((e,i) =>(
              <TouchableOpacity key={e.id} style={{}} onPress={()=>setseeProductDetails(e.id)}>
                <Image
                  source={{ uri: e.image }}
                  style={{ width: width*0.39, height: height*0.2, resizeMode: "contain" }}
                />
                {/* <Text>{e.title}</Text> */}
              </TouchableOpacity> 
             
              )
          )
          )}
        </ScrollView>
      </View>

      <Footer />
    </View>
  );
};

export default Profile;
