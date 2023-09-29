import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from './firebase-config';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';


import { Button, StyleSheet,  TextInput, View, Text, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import { useState } from 'react';

export default function LoginScreen(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCriarConta = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log('Conta Criada!')
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
            Alert.alert(error.message)

        })
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log('Logado!')
            const user = userCredential.user;
            console.log(user)
            navigation.navigate('Home')
            
        })
        .catch(error=>{
            console.log(error)

        })
    }

    return(
        <View style={styles.container}>

            <Text style={styles.texto}>Olá, seja bem-vindo!</Text>

            <TextInput 
                onChangeText={(text) => setEmail(text)}
                style ={{height: 30, width: '80%', borderColor: '#8B0000', borderBottomWidth: 3, margin:50}}
                placeholder="Email" 
                
            />

            <TextInput 

                onChangeText={(text)=>setPassword(text)}
                style ={{height: 30, width: '80%', borderColor: '#8B0000', borderBottomWidth: 3, margin: 50}}
                placeholder="Senha" 
                
            />

            
            <TouchableOpacity  style={styles.button}
                onPress={handleLogin}>
                <Text style={styles.textoo}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.button}
                onPress={handleCriarConta}>
                <Text style={styles.textoo}>Criar Conta</Text>
            </TouchableOpacity>

         

            
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {

        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        margin: 20,
        height: 5,
        backgroundColor: '#fff',
        borderRadius: 30,
        borderColor: 'gray',
        borderWidth: 1,
        
    },

    

    texto:{
        margin: 20,
        color: '#8B0000',
        fontSize: 20,
        fontStyle:'italic'
        
    },
    textoo:{
        color: 'white',
        
    },

    button:{
        backgroundColor: '#8B0000',
        padding: 15,
        margin: 15,
        height: 50,
        width: 170,
        borderRadius: 20,
        alignItems:'center'
        
    }

  
});