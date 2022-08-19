import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import { useEffect, useState } from "react";
import { getAllProducts } from "../firebase/products";

export default function TabOneScreen({
  route,
  navigation,
}: RootTabScreenProps<"home">) {
  let [products, setProducts] = useState([]);
  // let { productsSearch } = route.params;
  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["aqua", "white"]}
        start={[1, 0]}
        end={[1, 1]}
        locations={[0.3, 1]}
        style={styles.header}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            paddingTop: 40,
            paddingHorizontal: 10,
          }}
        >
          <Image
            source={require("../assets/images/amazon_desk.png")}
            style={{ width: 100, height: 50 }}
          />
          <Pressable onPress={() => navigation.navigate("Modal")}>
            <FontAwesome name="search" size={25} color={"#088977"} />
          </Pressable>
        </View>

        {/* <Text style={styles.text}>Sign in for the best experience</Text> */}
      </LinearGradient>

      <ScrollView
        style={styles.productsContainer}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {/* <Button
          // onPress={}
          title="Sign in"
          containerStyle={{
            // height: 50,
            width: "98%",
            marginHorizontal: "2%",
            marginTop: 10,
            marginBottom: 5,
            borderWidth: 1,
            borderRadius: 5,
          }}
          buttonStyle={{ backgroundColor: "orange", padding: 12 }}
          titleStyle={{
            color: "black",
            marginHorizontal: 20,
          }}
        />

        <Button
          // onPress={}
          title="Create account"
          containerStyle={{
            // height: 50,
            width: "98%",
            marginHorizontal: "2%",
            marginBottom: 30,
            borderWidth: 1,
            borderRadius: 5,
          }}
          buttonStyle={{ backgroundColor: "#E9E8E8", padding: 12 }}
          titleStyle={{
            color: "black",
            marginHorizontal: 20,
          }}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            width: "100%",
            margin: 10,
          }}
        >
          <Image
            source={require("../assets/images/1.jpg")}
            style={{ width: "20%", height: "100%", margin: 10 }}
          />
          <Text
            style={{
              color: "black",
              fontSize: 20,
              padding: 15,
              width: "80%",
            }}
          >
            Check order status and track ,change or return items
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            width: "100%",
            margin: 10,
          }}
        >
          <Image
            source={require("../assets/images/2.jpg")}
            style={{ width: "20%", height: "100%", margin: 10 }}
          />
          <Text
            style={{
              color: "black",
              fontSize: 20,
              padding: 15,
              width: "80%",
            }}
          >
            Shop past purchasese and everyday essentials
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            width: "100%",
            margin: 10,
          }}
        >
          <Image
            source={require("../assets/images/3.jpg")}
            style={{ width: "20%", height: "100%", margin: 10 }}
          />
          <Text
            style={{
              color: "black",
              fontSize: 20,
              padding: 15,
              width: "80%",
            }}
          >
            Creat lists with items you want,now or later
          </Text>
        </View> */}
        {route.params?.productsSearch.length > 0
          ? route.params?.productsSearch.map((product, index) => (
              <View style={styles.productBox} key={index}>
                <Text style={styles.productBox_discount}>
                  {product.Discount && product.Discount} %
                </Text>
                <Image
                  style={styles.productBox_img}
                  source={{
                    uri: product.imgs[0],
                  }}
                />
                <Text style={styles.productBox_name}>
                  {product.en.name.split(" ").slice(0, 6).join(" ")}...
                </Text>
                <View style={styles.productBox_priceBox}>
                  <Text style={styles.productBox_price}>
                    {product.Price} EG
                  </Text>
                </View>
                <View style={styles.productBox_BuyBox}>
                  <Text style={styles.productBox_buy}>Buy Now</Text>
                </View>
              </View>
            ))
          : products?.map((product, index) => (
              <View style={styles.productBox} key={index}>
                <Text style={styles.productBox_discount}>
                  {product.Discount && product.Discount} %
                </Text>
                <Image
                  style={styles.productBox_img}
                  source={{
                    uri: product.imgs[0],
                  }}
                />
                <Text style={styles.productBox_name}>
                  {product.en.name.split(" ").slice(0, 6).join(" ")}...
                </Text>
                <View style={styles.productBox_priceBox}>
                  <Text style={styles.productBox_price}>
                    {product.Price} EG
                  </Text>
                </View>
                <View style={styles.productBox_BuyBox}>
                  <Text style={styles.productBox_buy}>Buy Now</Text>
                </View>
              </View>
            ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  header: {
    height: "19%",
    backgroundColor: "aqua",
  },

  text: {
    color: "black",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 10,
  },
  productsContainer: {
    display: "flex",
    padding: 40,
    alignContent: "center",
  },
  productBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: 50,
    position: "relative",
    borderRadius: 15,
    width: "80%",
  },
  productBox_img: {
    height: 150,
    width: "50%",
    resizeMode: "contain",
  },
  productBox_name: {
    fontSize: 18,
    fontWeight: "300",
    margin: 20,
  },
  productBox_discount: {
    backgroundColor: "red",
    color: "white",
    padding: 7,
    position: "absolute",
    top: 0,
    right: 15,
    fontSize: 15,
    zIndex: 2,
  },
  productBox_priceBox: {
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
  },
  productBox_price: {
    fontSize: 20,
    fontWeight: "400",
  },
  productBox_BuyBox: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
  },
  productBox_buy: {
    fontSize: 14,
    backgroundColor: "#5497A7",
    color: "white",
    padding: 10,
    borderRadius: 15,
    fontWeight: "300",
  },
});
