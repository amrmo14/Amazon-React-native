import { LinearGradient } from 'expo-linear-gradient';
import { Image, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from '@rneui/themed';



export default function UserScreen({ navigation }: RootTabScreenProps<'User'>) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['aqua', 'white']}
        start={[1, 0]} end={[1, 1]} locations={[0.3, 1]}
        style={styles.header} >
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", backgroundColor: "transparent", paddingTop: 40, paddingHorizontal: 10 }}>
          <Image source={require('../assets/images/amazon_desk.png')} style={{ width: 100, height: 50, }} />
          <Pressable
            // onPress={}
            >
            <FontAwesome
              name="search"
              size={25}
              color={"#088977"}

            />
          </Pressable>
        </View>

        <Text style={styles.text}>Sign in for the best experience</Text>
      </LinearGradient>


      <ScrollView style={{ width: "98%%" }} >
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Sign In"
          containerStyle={{
            // height: 50,
            width: "98%",
            marginHorizontal: "2%",
            marginTop: 10,
            marginBottom:5,
            borderWidth: 1,
            borderRadius: 5
            
          }}
          buttonStyle={{ backgroundColor: 'orange',padding:12 }}
          titleStyle={{
            color: 'black',
            marginHorizontal: 20,
          }}
        />

        <Button
    onPress={() => navigation.navigate('Register')}
          title="Create account"
          containerStyle={{
            // height: 50,
            width: "98%",
            marginHorizontal: "2%",
            marginBottom: 30,
            borderWidth: 1,
            borderRadius: 5
          }}
          buttonStyle={{ backgroundColor: '#E9E8E8',padding:12 }}
          titleStyle={{
            color: 'black',
            marginHorizontal: 20,
          }}
        />

        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: "white", width: "100%", margin: 10 }}>
          <Image source={require('../assets/images/1.jpg')} style={{ width: "20%", height: "100%", margin: 10, }} />
          <Text style={{
            color: "black",
            fontSize: 20,
            padding: 15,
            width: "80%",
          }}>Check order status and track ,change or return items</Text>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: "white", width: "100%", margin: 10 }}>
          <Image source={require('../assets/images/2.jpg')} style={{ width: "20%", height: "100%", margin: 10, }} />
          <Text style={{
            color: "black",
            fontSize: 20,
            padding: 15,
            width: "80%",
          }}>Shop past purchasese and everyday essentials</Text>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: "white", width: "100%", margin: 10 }}>
          <Image source={require('../assets/images/3.jpg')} style={{ width: "20%", height: "100%", margin: 10, }} />
          <Text style={{
            color: "black",
            fontSize: 20,
            padding: 15,
            width: "80%",
          }}>Creat lists with items you want,now or later</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  header: {
    height: '19%',
    backgroundColor: 'aqua',

  },

  text: {
    color: "black",
    fontSize: 22,
    textAlign: 'center',
    paddingVertical: 10

  }

});
