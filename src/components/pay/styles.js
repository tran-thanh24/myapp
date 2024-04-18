import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20      
    },
    container:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    leftContainer: {
        marginRight: 8,
        justifyContent: 'center'
    },
    textLine: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    rightContainer:{
        marginLeft: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    totalPriceText: {
        fontSize: 24,
        marginBottom: 20,
    },
    payButton: {
        width: 100,
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    payButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});