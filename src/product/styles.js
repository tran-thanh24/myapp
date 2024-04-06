import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: "center"
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical:10,
        width: '100%',
        backgroundColor: 'white',
        shadowColor: 'black',
        elevation: 5,
        shadowOpacity: 0.5,
        shadowRadius: 5
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    leftContainer: {
        marginRight: 20,
    },
    leftIcon: {
        width: 24,
        height: 24,
    },
    image: {
        width: 400,
        height: 300,
    },
    titleContainer: {
        width: '80%',
        marginTop: 10
        // backgroundColor: '#007537',

    },
    titleContainer2: {
        width: '90%',
        marginTop: 10
        // backgroundColor: '#007537',

    },
    textLine: {
        color: '#ffffff',
        fontSize: 15,
        backgroundColor: '#007537',
        width: '25%',
        textAlign: 'center',
        borderRadius: 5,
    },
    text: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.3,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addToCartButton: {
        backgroundColor: '#007537',
        paddingHorizontal: 96,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15
    },
    addToCartButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    calculation: {
        borderWidth: 1,
        borderColor: '#ABABAB',
        borderRadius: 5,
        paddingHorizontal: 10,
    }
});