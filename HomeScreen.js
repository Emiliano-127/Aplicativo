import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, requireNativeComponent, Button } from 'react-native';
import { Link } from '@react-navigation/native';


export default function HomeScreen({navigation}){

    return(
        <View style={styles.container}>
      
        <Image 
          style={styles.image}
          source={require('./assets/men.jpg')}/>
  
  
        < View style={styles.buttonContainer}>
  
          <Button title={'Vamos agendar uma data?'} onPress={()=> navigation.navigate('Blood')} 
            color = "red"
            borderRadius = {100 } />
          
        </View>
        
        
        <StatusBar style="auto" />
      </View>
      
    );
};

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
  