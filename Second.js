import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Second({navigation}){

    return(
        <View style={styles.container}>

<TextInput 
                style ={{height: 30, width: '80%', borderColor: 'red', borderBottomWidth: 3, margin:50}}
                placeholder="Nome" 
                
            />

            <TextInput 
                style ={{height: 30, width: '80%', borderColor: 'red', borderBottomWidth: 3, margin:50}}
                placeholder="Email" 
                
            />

            <TextInput 
                style ={{height: 30, width: '80%', borderColor: 'red', borderBottomWidth: 3, margin: 50}}
                placeholder="Senha" 
                
            />

            <Button title={'Sign-Up'} onPress={() => navigation.navigate('Blood')}/>

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