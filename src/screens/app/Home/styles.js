import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    containerHeader: {
        backgroundColor: '#F6F6F6'
    },
    textAndCartContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingTop: 50
    },
    textLine: {
        fontSize: 24,
        fontWeight: 'normal',
        paddingLeft: 10
    },
    imageCart: {
        width: 20,
        height: 20,
        marginLeft: 155,
        paddingTop: 20
    },
    textContainer: {
        marginBottom: 20,
    },
    imageBackgroundContainer: {
        width: '100%',
        height: 220,
    },
    imageBackground: {
        flex: 1,
        objectFit: 'fill',
        position: 'relative'
    },
    containerList: {
        padding: 10,
        backgroundColor: '#FFF7FC',
        flex: 1
    },
    text: {
        fontSize: 24,
        fontWeight: 'normal'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
    },
    itemImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: '#F6F6F6'
    },
    itemText: {
        marginTop: 10,
        textAlign: 'center',
    },
    textnew: {
        marginBottom: 20,
        fontSize: 15,
        marginLeft: 200,
        textDecorationLine: 'underline', // Thêm gạch chân dưới văn bản
        textDecorationColor: 'black', // Màu của gạch chân
    },
    textImage: {
        color: '#007537',
        },
    showText: {
        position: 'absolute',
        top: 60,
        left: 20,
    }
});
