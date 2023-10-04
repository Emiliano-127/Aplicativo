
import DateTimePicker from '@react-native-community/datetimepicker';

import {Text, View, Platform, Button, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import { StyleSheet } from 'react-native';
import { setDoc, doc } from 'firebase/firestore';
import { db } from './firebase-config';




import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import DadosUsuario from './DadosUsuario';

AppRegistry.registerComponent(appName, () => App);


const Data = ({navigation}) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);



    function saveDate() {
      // Submeter data
      setDoc(doc(db, "datas", "F8XyCPrtClHEJuM5PoXm"), {
          data: date
      }).then(() => {
          // Dados salvos com sucesso
          console.log('Data salva com sucesso!')
      })
      .catch(error => {
          console.log(error)
          Alert.alert(error.message)
      });
  }


const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showPicker = () => {
    setShow(true);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D2691E'}}>
      <Text style={{fontSize: 20, marginBottom: 20, color: 'white'}}>
        Agende uma Data!
      </Text>

      

      <TouchableOpacity  style={styles.button}
                onPress={showPicker}>
                <Text style={styles.texto}>Selecione uma Data</Text>
      </TouchableOpacity>


      {show && (
        <DateTimePicker
          value={date}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={onChange}
          style={{width: 300, backgroundColor: 'white'}}
        />
      )}
      <Text style={{fontSize: 16, marginTop: 10, color: 'white'}}>
        Data selecionada: {date.toLocaleDateString()}
      </Text>
      
      

      <TouchableOpacity  style={styles.button}
                onPress={saveDate}>
                <Text style={styles.texto}>Salvar Data</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.button}
                onPress={() => navigation.navigate('DadosUsuario')}>
                <Text style={styles.texto}>Dados do usuário</Text>
      </TouchableOpacity>

      </View>
  );
    

    
};

const styles = StyleSheet.create({

  texto:{
    color: 'white',
    
},

button:{
    backgroundColor: '#8B4513',
    padding: 15,
    margin: 15,
    height: 50,
    width: 170,
    borderRadius: 20,
    alignItems:'center'
    
},
});

// Exportando o componente principal
export default Data;

