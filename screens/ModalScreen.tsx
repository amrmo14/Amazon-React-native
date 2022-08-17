import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RootTabScreenProps } from '../types';

export default function ModalScreen({ navigation }: RootTabScreenProps<'home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <Pressable
            onPress={() => navigation.navigate('User')}>
            <FontAwesome
              name="search"
              size={25}
              color={"#088977"}

            />
          </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%"
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
});
