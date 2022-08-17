/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import { StyleSheet } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabFourScreen from '../screens/TabFourScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabTwoScreen from '../screens/UserScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { View ,Text } from '../components/Themed';
import UserScreen from '../screens/UserScreen';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false, }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'fullScreenModal' }} >
        <Stack.Screen name="Modal" component={ModalScreen} options={{ headerShown: false, }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false, }}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();


function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="home"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'home'>) => ({
          title: 'Tab One',
          headerShown:false,
          tabBarIcon: ({ color, focused }) =>
          
          focused? (
            <View style={{ borderTopWidth:4, width: "100%", height: "100%", borderColor: "#088977",backgroundColor:"white" }}>
              <View style={{marginTop:9,  justifyContent: "center", alignItems: "center",backgroundColor:"white" }}>
              <TabBarIcon     name="home" color={"#088977"} />
              </View>
               
            </View>
            
            ) :
            (
              <TabBarIcon name="home" color={"#088977"} />
            )
          ,
          tabBarLabel:() => {return null},
       
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate('Modal')}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}>
          //     <FontAwesome
          //       name="search"
          //       size={25}
          //       color={"#088977"}
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // ),
        })}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="User"
        component={UserScreen}
        
        options={{
          title: 'User',
          tabBarLabel:() => {return null},
          headerShown:false,
          tabBarIcon: ({ focused, color }) => 
          focused? (
            <View style={{ borderTopWidth:4, width: "100%", height: "100%", borderColor: "#088977",backgroundColor:"white" }}>
              <View style={{marginTop:9,  justifyContent: "center", alignItems: "center",backgroundColor:"white" }}>
              <TabBarIcon     name="user-circle" color={"#088977"} />
              </View>
               
            </View>
            
            ) :
            (
              <TabBarIcon name="user-circle" color={"#088977"} />
            )
          
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          headerShown:false,
          tabBarLabel:() => {return null},
          title: 'Tab Three',
          tabBarIcon: ({ color,focused }) => 
          focused? (
            <View style={{ borderTopWidth:4, width: "100%", height: "100%", borderColor: "#088977",backgroundColor:"white" }}>
              <View style={{marginTop:0,  justifyContent: "center", alignItems: "center",backgroundColor:"white",position:'absolute' }}>
                <Text style={{color:'white',position:'relative',left:37,top:12,zIndex:1,fontSize:12}}>0</Text>
                <View style={{position:'relative',zIndex:0,bottom:5,left:35,backgroundColor:"white"}}>
                <TabBarIcon     name="shopping-cart" color={"#088977"} />
                </View>
              
              </View>
               
            </View>
            
            ) :
            (
              <View style={{ width: "100%", height: "100%", borderColor: "#088977",backgroundColor:"white" }}>
              <View style={{marginTop:4,  justifyContent: "center", alignItems: "center",backgroundColor:"white",position:'absolute' }}>
                <Text style={{color:'white',position:'relative',left:37,top:12,zIndex:1,fontSize:12}}>0</Text>
                <View style={{position:'relative',zIndex:0,bottom:5,left:35,backgroundColor:"white"}}>
                <TabBarIcon     name="shopping-cart" color={"#088977"} />
                </View>
              
              </View>
               
            </View>
            )
          
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={TabFourScreen}
        
        options={{
          headerShown:false,
          tabBarLabel:() => {return null},
          title: 'Tab Four' ,
          tabBarIcon: ({ color ,focused}) => 
          focused? (
            <View style={{ borderTopWidth:4, width: "100%", height: "100%", borderColor: "#088977",backgroundColor:"white" }}>
              <View style={{marginTop:9,  justifyContent: "center", alignItems: "center",backgroundColor:"white" }}>
              <TabBarIcon     name="align-justify" color={"#088977"} />
              </View>
               
            </View>
            
            ) :
            (
              <TabBarIcon name="align-justify" color={"#088977"} />
            )
          ,
        }}

        
      />
    </BottomTab.Navigator>

    
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={25} style={{ marginBottom: -3 }}  {...props} />;
}


