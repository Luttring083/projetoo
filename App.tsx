import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
 View,
 Text,
 TextInput,
 StyleSheet,
 TouchableOpacity,
 Image,
} from 'react-native';
 




const LoginScreen = () => {
 return (
    <View style={styles.container}>
      <Image

        source={require('./assets/94187CFE-2941-4733-B38E-4CE3E455577B.jpg')  }
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
 },
 logo: {
    width: 150,
    aspectRatio: 19/19,
    height: 150,
    marginBottom: 50,
    
 },
 input: {
    width: 300,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#DDD',
 },
 loginButton: {
    width: 300,
    height: 44,
    marginBottom: 10,
    backgroundColor: '#007AFF',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
 },
 loginText: {
  color: '#FFF',
 },
 forgotButton: {
  alignItems: 'center',
  justifyContent: 'center',
 },
forgotText: {
  color: '#007AFF',
  },
});
export default LoginScreen