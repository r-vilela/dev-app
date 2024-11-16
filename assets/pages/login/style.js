import { Button, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        gap: 7
    },
    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        paddingHorizontal: 2,
    },
    button: {
        backgroundColor: '#0ea5e9', 
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles