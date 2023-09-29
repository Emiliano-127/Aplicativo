import { StatusBar } from 'expo-status-bar';

import { Button, StyleSheet,  TextInput, View, Text} from 'react-native';

export default function First({navigation}){

    return(
        <View style={styles.container}>

            <Text style={styles.text}>Olá, seja bem-vindo!</Text>

            <TextInput 
                style ={{height: 30, width: '80%', borderColor: 'red', borderBottomWidth: 3, margin:50}}
                placeholder="Email" 
                
            />

            <TextInput 
                style ={{height: 30, width: '80%', borderColor: 'red', borderBottomWidth: 3, margin: 50}}
                placeholder="Senha" 
                
            />

            <Button title={'Login'} onPress={}/>
            <Button title={'Criar Conta'} onPress={}/>

        </View>

        
    );

};



const styles = StyleSheet.create({
    container: {

        flex: 0.7,
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

    lines:{
        width: 200,
        height: 5,
        color: "blue",
    },

    text:{
        margin: 30,
        color: "red",
        
    }
});