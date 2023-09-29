import { View, Text, TouchableOpacity, StyleSheet, Image, TouchableHighlight } from 'react-native';
import React from 'react';

export default function  Blood({navigation}) {

  const tabela1 = [
    <React.Fragment key="tabela1">
      <TouchableOpacity key="o-" onPress={()=>navigation.navigate('City')}>
        <Image  style={styles.maiores} source={require('./assets/o-.jpg')}/>
      </TouchableOpacity>
      <TouchableOpacity key="B2" onPress={()=>navigation.navigate('City')}>
        <Image  style={styles.maiores} source={require('./assets/B2.jpg')}/>
      </TouchableOpacity>
      <TouchableOpacity key="a-" onPress={()=>navigation.navigate('City')}>
        <Image  style={styles.maiores} source={require('./assets/a-.jpg')}/>
      </TouchableOpacity>
    </React.Fragment>
  ];

  const tabela2 = [
    <React.Fragment key="tabela2">
      <TouchableOpacity key="04"onPress={()=>navigation.navigate('City')}>
        <Image  style={styles.imagens} source={require('./assets/04.jpg')}/>
      </TouchableOpacity>
      <TouchableOpacity key="05" onPress={()=>navigation.navigate('City')}>
        <Image  style={styles.imagens} source={require('./assets/05.jpg')}/>
      </TouchableOpacity>
      <TouchableOpacity key="03" onPress={()=>navigation.navigate('City')}>
        <Image  style={styles.imagens} source={require('./assets/03.jpg')}/>
      </TouchableOpacity>
    </React.Fragment>
  ];

  const tabela3 = [
    <React.Fragment key="tabela3">
      <TouchableOpacity key="02"onPress={()=>navigation.navigate('City')}>
        <Image  style={styles.imagens} source={require('./assets/02.jpg')}/>
      </TouchableOpacity>
      <TouchableOpacity key="08" onPress={()=>navigation.navigate('City')}>
        <Image  style={styles.imagens} source={require('./assets/08.jpg')}/>
      </TouchableOpacity>
    </React.Fragment>
  ];


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "white" }}>
      <Text style={styles.texto}>Selecione seu tipo de sangue</Text>

      <View style={{ flexDirection: "row"}}>
        {tabela1}
      </View>

      <View style={{flexDirection: "row"}}>
        {tabela2}
      </View>

      <View style={{flexDirection: "row"}}>
        {tabela3}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagens:{
    width: 90,
    height: 90,
    borderRadius: 50,
    margin: 20,
    padding: 30,
    borderColor: 'red',
    borderWidth: 5,
    
  },
  maiores:{
    width: 90,
    height: 90,
    borderRadius: 50,
    margin: 20,
    padding: 40,
    borderColor: 'red',
    borderWidth: 5,
    alignItems: 'center',
    
  },

  texto:{
    
    fontSize: 23, 
    fontStyle:'italic',
    fontWeight:'bold', 
    color:'red',
    paddingBottom: 10,
    margin: 15,
    justifyContent:'center'
    
    
    
  }
})


