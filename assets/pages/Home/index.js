import React, { useState } from "react";
import { TextInput, View } from "react-native"
import styles from "./style";

export default function InitialPage() {
    const [usuario, setUsuario] = useState('')



    return (
        <View style={styles.container}>
            <Text>Inicio</Text>
            <TextInput/>
        </View>
    )
}

