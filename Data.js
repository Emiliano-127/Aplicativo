
import DateTimePicker from '@react-native-community/datetimepicker';

import {Text, View, Platform, Button} from 'react-native';
import React,{useState} from 'react';


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


const Data = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);




const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showPicker = () => {
    setShow(true);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#B22222'}}>
      <Text style={{fontSize: 20, marginBottom: 20, color: 'white'}}>
        Agenda uma Data!
      </Text>
      <Button onPress={showPicker} title="Selecione uma Data" />
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
      <Text style={{fontSize: 16, marginTop: 20, color: 'white'}}>
        Data e hora selecionada: {date.toLocaleDateString()}
      </Text>
      <Text style={{color: 'white'}}> Entraremos em contato com você!</Text>
    </View>
  );
};

// Exportando o componente principal
export default Data;

