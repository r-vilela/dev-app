import React from "react";
import { router } from "expo-router";
import { Text, View, Image, TouchableOpacity } from "react-native"
import styles from "./style";

export default function LoginPage() {

    const logar = () => {
        router.replace('Home')
    }

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.Logo} source={require('../../images/logo.png')} />
            </View>
            <Text style={styles.LogoText}>Voto Supremo</Text>
            <TouchableOpacity style={styles.LogInButton} onPress={logar}>
                <Text style={styles.LoginButtonText}>Entrar</Text>
            </TouchableOpacity>

        </View>
    )
}