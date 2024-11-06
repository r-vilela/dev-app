import { StyleSheet } from "react-native"

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

export default styles