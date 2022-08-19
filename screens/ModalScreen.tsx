import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { RootTabScreenProps } from "../types";
import { Input } from "@rneui/themed";
import { useEffect, useState } from "react";
import { getAllProducts } from "../firebase/products";

{
  /* <Pressable onPress={() => navigation.navigate("User")}>
  <FontAwesome name="search" size={25} color={"#088977"} />
</Pressable> */
}
export default function ModalScreen({
  navigation,
}: RootTabScreenProps<"home">) {
  let [searchValue, setSearchValue] = useState("");
  let [products, setProducts] = useState([]);
  let [productsSearch, setProductsSearch] = useState([]);
  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);
  let handleSearchBtn = () => {
    if (isNaN(searchValue)) {
      products.forEach((product) => {
        if (product.en.name.toLowerCase().includes(searchValue.toLowerCase())) {
          productsSearch.push(product);
        }
      });
    } else {
      products.forEach((product) => {
        if (Number(searchValue) >= Number(product.Price)) {
          productsSearch.push(product);
        }
      });
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search For A Specific Product</Text>
      <Input
        value={searchValue}
        onChangeText={(text) => {
          setSearchValue(text);
        }}
        placeholder="Search"
        style={{
          marginTop: 35,
          textAlign: "center",
        }}
      />
      <Pressable
        onPress={() => {
          handleSearchBtn();
          console.log(productsSearch);
          navigation.navigate("home", {
            productsSearch,
          });
        }}
      >
        <FontAwesome name="search" size={25} color={"#088977"} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "",
    height: "100%",
    paddingTop: 90,
  },
  title: {
    fontSize: 20,
    fontWeight: "300",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
