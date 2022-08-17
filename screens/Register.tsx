import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
// import { useAuthState } from "react-firebase-hooks/auth";
import * as React from 'react';
import { TextInput } from 'react-native';
import { useFormik } from "formik";
import { Button,Card } from "@rneui/themed";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
  } from "./firebase";
  import { useAuthState } from "react-firebase-hooks/auth";



// import RadioButtonRN from 'radio-buttons-react-native';


export default function RegisterScreen({ navigation }: RootTabScreenProps<'User'>) {
    const[failed,setFailed]=React.useState(false)
    // const [email, setEmail] = React.useState("");
    // const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [user, loading, error] = useAuthState(auth);
    const { handleChange, handleSubmit, values } = useFormik({
        initialValues: {name:'', email: '', password: '' },
        onSubmit: (values) => {
        //     if (values.email == 'amr@gmail.com') {
        //         setFailed(true)
        //     }
        //     else {
              
        //        navigation.navigate('home')
        //     }
        // }/
        registerWithEmailAndPassword(values.name, values.email, values.password);
        }
    })
    // const register = () => {
    //     if (!name) alert("Please enter name");
    //     registerWithEmailAndPassword(name, email, password);
    //   };
      React.useEffect(() => {
        if (loading) return;
        if (user) {
            // setIsUser(true)
            navigation.navigate('home')
        }
      }, [user, loading]);
    return (

        <View style={styles.container}>
            <LinearGradient
                colors={['aqua', 'white']}
                start={[1, 0]} end={[1, 1]}
                style={styles.header} >
                <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: "transparent", paddingTop: 40, paddingHorizontal: 10 }}>
                    <Pressable
                        onPress={() => navigation.navigate('User')}
                    >
                        <Text style={styles.text}>Cancel</Text>
                    </Pressable>
                    <Image source={require('../assets/images/amazon_desk.png')} style={{ width: 100, height: 50, marginLeft: '25%' }} />
                </View>
            </LinearGradient>
            <Text style={styles.title} >Welcome</Text>
            <ScrollView  keyboardShouldPersistTaps='handled'>
            <Card >
            <Card.Title style={{fontSize:15,textAlign:"left",marginBottom:5}} >Name</Card.Title>
            <TextInput
                onChangeText={handleChange('name')}
                style={{ fontSize: 15, borderWidth: 2, borderRadius: 5, borderColor: 'grey', padding: 10 ,marginBottom:5}}
            />
            <Card.Title style={{fontSize:15,textAlign:"left",marginBottom:5}} >Email</Card.Title>
            <TextInput
                onChangeText={handleChange('email')}
                style={{ fontSize: 15, borderWidth: 2, borderRadius: 5, borderColor: 'grey', padding: 10 ,marginBottom:5}}
            />
            <Card.Title style={{fontSize:15,textAlign:"left",marginBottom:5}} >Password</Card.Title>
            <TextInput
        
                secureTextEntry
                onChangeText={handleChange('password')}
                style={{ fontSize: 15, borderWidth: 2, borderRadius: 5, borderColor: 'grey', padding: 10 ,marginBottom:5}}
            />

            <Button
                
                title="Register"
                containerStyle={{
                    // height: 50,
                    // width: "98%",
                    // marginHorizontal: "2%",
                    marginTop: 10,
                    marginBottom: 5,
                    borderWidth: 1,
                    borderRadius: 5
                }}
                onPress={handleSubmit}
                buttonStyle={{ backgroundColor: 'orange', padding: 10 }}
                titleStyle={{
                    color: 'black',
                    marginHorizontal: 20,
                }}
            />
            <Card.Title style={{textAlign:"left",marginTop:5}}>
            By creating an account, you agree to Amazon's Conditions of use and Privacy Notice.</Card.Title>
           
            {(failed)?<Card.Title style={{color:"red",marginTop:5}}>
             Email already exists</Card.Title>:
            <View></View>}
            </Card>
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
        fontSize: 30,
        //   fontWeight: 'bold',
        color: "black",
        margin: 10
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    header: {
        height: '12%',
        backgroundColor: 'aqua',

    },

    text: {
        color: "black",
        fontSize: 22,
        //   textAlign: 'center',
        paddingVertical: 10

    }

});
