import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center'
        // padding: 7
    },
    button: {
        marginVertical: 20,
    },
    footerText: {
        color: '#4F63AC',
        marginBottom: 56,
        textAlign: 'center',
    },
    footerLink: {
        fontWeight: 'bold',
    },
    welcome: {
        textAlign: 'center',
        fontSize: 30,
        fontStyle: 'normal'
    },
    line: {
        textAlign: 'center'
    },
    banner: {
        width: '100%',
        height: 270,
        objectFit: 'fill',
        position: 'relative',
    },
});