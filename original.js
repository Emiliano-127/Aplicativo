import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, requireNativeComponent, Button } from 'react-native';
import { LinearGradient } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <View style={styles.container}>
      
      
      <Text>  Meu Aplicativo  </Text>
      <Image 
      //style={{ width: 'auto', height: 'auto'}}
      source={require('./assets/doesangue.png')}/>
      <Image 
        style={styles.image}
        source={require('./assets/men.jpg')}/>


      < View style={styles.buttonContainer}>

        <Button title={'Login'} onPress={()=>alert('Pressionou-me')} 
          color = "red"
          borderRadius = {100 } />
        
      </View>
      <Text style={styles.text}>Você não tem uma conta?             Sign-Up</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  image:{
    width: '100%',
    height:'50%',
  },

  buttonContainer:{
    marginBottom: 30,
    width: '70%',
    textAlign: 'left',
    
  },

  text:{
    textAlign: 'right',
    color : "red"

  },

  
});


