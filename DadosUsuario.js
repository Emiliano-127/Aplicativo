

import {getFirestore} from "firebase/firestore";
import { View} from 'react-native';
import { Alert ,StyleSheet, TextInput, TouchableOpacity, Text, Button} from "react-native";
import React, { useState } from "react";


import { doc } from "firebase/firestore";
import { db } from "./firebase-config";
import { getDoc, setDoc } from "firebase/firestore";

import { firebaseConfig } from './firebase-config';

export default function DadosUsuario(){

   

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');


    function create (){

        //submeter dados
        setDoc(doc(db, "usuarios", "tX2annDNxS69lDFVTmkF"), {
            nome: nome,
            idade: idade,
            peso: peso,
            endereco: endereco,
            cidade: cidade

          }).then(()=>{
            //dados salvos com sucesso
            console.log('Dados Salvos com sucesso!')
            
        })
        .catch(error=>{
            console.log(error)
            Alert.alert(error.message)

        })

    }

    const [userData, setUserData] = useState(null);

    const [data, setData] = useState(null);

    async function readDate() {
        const docRef = doc(db, "datas", "F8XyCPrtClHEJuM5PoXm");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Data:", docSnap.data().data.toDate());
            setData(docSnap.data().data.toDate());
        } else {
            console.log("Não há data salva!");
        }
    }

    async function readData() {
        const docRef = doc(db, "usuarios", "tX2annDNxS69lDFVTmkF");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Dados do usuário :", docSnap.data());
            setUserData(docSnap.data());
        } else {
            console.log("Não há dados salvos!");
        }
    }


    
    return(
        <View style={styles.container}>
            <Text style={{margin: 20, fontSize: 20}}>Insira os seus dados!</Text>

            <TextInput value={nome} onChangeText={(nome) => {setNome(nome)}} placeholder="Nome" style={styles.caixaTexto}></TextInput>
            <TextInput value={idade} onChangeText={(idade) => {setIdade(idade)}} placeholder="Idade" style={styles.caixaTexto}></TextInput>
            <TextInput value={peso} onChangeText={(peso) => {setPeso(peso)}} placeholder="Peso" style={styles.caixaTexto}></TextInput>
            <TextInput value={endereco} onChangeText={(endereco) => {setEndereco(endereco)}} placeholder="Endereço" style={styles.caixaTexto}></TextInput>
            <TextInput value={cidade} onChangeText={(cidade) => {setCidade(cidade)}} placeholder="Cidade" style={styles.caixaTexto}></TextInput>


            <TouchableOpacity style={styles.bottom}
                 onPress={create}>
                <Text style={styles.textoo}>Enviar Dados</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottom}
                 onPress={readData}>
                <Text style={styles.textoo}>Mostrar Dados</Text>
            </TouchableOpacity>

            
           
           {userData && (
               <View>
                   <Text>Nome: {userData.nome}</Text>
                   <Text>Idade: {userData.idade} Anos</Text>
                   <Text>Peso: {userData.peso} Kg</Text>
                   <Text>Endereço: {userData.endereco}</Text>
                   <Text>Cidade: {userData.cidade}</Text>
               </View>
           )}

        <TouchableOpacity style={styles.bottom}
            onPress={readDate}>
            <Text style={styles.textoo}>Data Agendada</Text>
        </TouchableOpacity>

        {data && (
            <Text>Data: {data.toLocaleDateString()}</Text>
        )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    caixaTexto:{
        width: '90%',
        fontSize: 18,
        padding: 12,
        borderColor: 'gray',
        borderWidth: 0.2,
        borderRadius: 10,
        alignItems:'center',
        

    },

    bottom:{
        width: '90%',
        fontSize: 18,
        padding: 12,
        margin: 10,
        borderColor: 'gray',
        borderWidth: 0.2,
        borderRadius: 10,
        alignItems:'center',
        backgroundColor: '#D2691E'
    }
});