
import {View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

import React from 'react';


export default function City({navigation}){

    const cidades =[

        <View style={styles.container}>
            <React.Fragment key={'cities'} >

                <TouchableOpacity onPress={()=>navigation.navigate('Data')} key={"BH"}><Text style={styles.texto}>Belo Horizonte</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Data')} key={"GV"}><Text style={styles.texto}>Governador Valadares</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Data')}key={"JF"}><Text style={styles.texto}>Juiz de Fora</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Data')}key={"AP"}><Text style={styles.texto}>Além Paraíba</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Data')}key={"BT"}><Text style={styles.texto}>Betim</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Data')}key={"DMT"}><Text style={styles.texto}>Diamantina</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Data')}key={"DIV"}><Text style={styles.texto}>Divinopólis</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Data')}key={"ITU"}><Text style={styles.texto}>Ituiutaba</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Data')}key={"MAN"}><Text style={styles.texto}>Manhuaçu</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Data')}key={"MC"}><Text style={styles.texto}>Montes Claros</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Data')}key={"PAS"}><Text style={styles.texto}>Passos</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Data')}key={"PDM"}><Text style={styles.texto}>Patos de Minas</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Data')}key={"UB"}><Text style={styles.texto}>Uberlândia</Text></TouchableOpacity>
        </React.Fragment>


        </View>
        
    ];

    return (

        <SafeAreaView style={styles.container}>
          {cidades}
            
         
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,   
    },

    texto:{
        color: 'white',
        fontWeight: 'bold',
        fontSize:15,
        backgroundColor: 'red',
        padding: 8.5,
        margin: 10,
        marginLeft: 100,
        marginRight: 100,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 5,

       
    }
     
});