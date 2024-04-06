import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    checkRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkText: {
        color: '#4F63AC',
        marginHorizontal: 13,
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
        height: 200,
        objectFit: 'fill',
        position: 'relative',
    }
});