import React from "react";
import { Text, TouchableOpacity, View } from "react-native"
import styles from "./style";
import useAuthStore from "../../../store/authstore";
import { router } from "expo-router";

export default function HomePage() {
    const { usuario, logout, usuarioLogado } = useAuthStore()

    const deslogar = () => {
        logout()
    }

    return (
        <>
            {usuarioLogado ? (
                    <View style={styles.container}>
                        <Text style={styles.text}>perfil da {usuario}</Text>
                        <TouchableOpacity style={styles.button} onPress={deslogar}> 
                            <Text style={{color:'white'}}>Deslogar</Text>
                        </TouchableOpacity>
                    </View>
                )
                : router.replace('Login') 
            }
            
        </>
    )
}