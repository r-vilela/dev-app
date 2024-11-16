import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "./style";
import useAuthStore from "../../../store/authstore"
import { router } from "expo-router";

export default function LoginPage() {
    const [usuario, setUsuario] = useState('emilys')
    const [senha, setSenha] = useState('emilyspass')

    const { login, mensagemError, usuarioLogado } = useAuthStore()

    const handleInputUsuario = (text) => {
        setUsuario(text)
    }
    const handleInputSenha = (text) => {
        setSenha(text)
    }

    const logar = async () => {
        if(usuario.length>0 && senha.length>0) {
            login(usuario, senha)
            console.log(usuarioLogado)
            if(mensagemError){
                Alert.alert(mensagemError)                
            }

            if(usuarioLogado) {
                router.navigate('Home')
            }

        } else {
            Alert.alert('Preencha os campos usuario e senha')
        }
        
    }

    return (
        <View style={styles.container}>
            <Text>Usuario</Text>
            <TextInput 
                style={styles.input}
                onChange={handleInputUsuario}
                value={usuario}
            />
            <Text>Senha</Text>
            <TextInput 
                style={styles.input}
                onChange={handleInputSenha}
                value={senha}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={logar} >
                <Text style={{color: 'white'}}>Senha</Text>
            </TouchableOpacity>
        </View>
    )
}

