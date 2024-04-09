import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ItemProductHome_Component({image, title, navigation, data}) {
    return (
        <View style={styles.containerList}>
            <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate('product', {data: data})
                }}
            >
                <View style={styles.rowContainer}>
                    <View style={styles.itemContainer}>
                        <Image
                            style={styles.itemImage}
                            source={image}
                        />
                        <Text style={styles.itemText}>{title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerList: {
        backgroundColor: '#FFF7FC',
        width: '40%'
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
})