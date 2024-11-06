import React from "react";
import { router } from "expo-router";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"

export default function Login() {

    const logar = () => {
        router.replace('Home')
    }

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.Logo} source={require('../assets/images/logo.png')} />
            </View>
            <Text style={styles.LogoText}>Voto Supremo</Text>
            <TouchableOpacity style={styles.LogInButton} onPress={logar}>
                <Text style={styles.LoginButtonText}>Entrar</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    Logo: {
        width: 300,
        height: 300
    },
    LogoText: {
        color: 'green',
        fontSize: 40,
        fontWeight: 'bold'
    },
    LogInButton: {
        height: 100,
        width: 200,
        backgroundColor: '#54c762', 
        padding: 20,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    LoginButtonText: {
        fontSize: 30,
        color: 'white'
    }

})