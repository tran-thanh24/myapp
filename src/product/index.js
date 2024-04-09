import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles'
import { Image, Text, TouchableOpacity, View } from "react-native";

const Product = ({ navigation, route }) => {
    const { data } = route.params;
    console.log(data);
    const [quantity, setQuantity] = useState(0);
    const [price, setprice] = useState(0);
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    useEffect(() => {
        setprice(quantity * data.price)
    }, [quantity])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.leftContainer} onPress={() => {
                    navigation.navigate('Home')
                }}>
                    <Image source={require('../assets/image/back.png')} style={styles.leftIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>{data.name}</Text>
                <TouchableOpacity style={styles.rightContainer} onPress={() => { }}>
                    <Image source={require('../assets/image/shopping-cart.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#F6F6F6' }}>
                <Image source={data.image[0]} style={styles.image} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.textLine}>{data.type}</Text>
                <Text style={{ marginTop: 15, fontSize: 30, color: '#007537' }}>{data.name}</Text>
                <Text style={{ marginTop: 15, fontSize: 20, borderBottomWidth: 0.3 }}>Chi tiết sản phẩm</Text>
                <View style={styles.text}>
                    <Text style={{ marginTop: 15, fontSize: 18, }}>Kích cỡ</Text>
                    <Text style={{ marginTop: 15, fontSize: 18, }}>{data.size}</Text>
                </View>
                <View style={styles.text}>
                    <Text style={{ marginTop: 15, fontSize: 18, }}>Xuất xứ</Text>
                    <Text style={{ marginTop: 15, fontSize: 18, }}>{data.origin}</Text>
                </View>
                <View style={styles.text}>
                    <Text style={{ marginTop: 15, fontSize: 18, }}>Tình trạng</Text>
                    <Text style={{ marginTop: 15, fontSize: 18, color: '#007537' }}>{data.quantity}</Text>
                </View>
            </View>
            <View style={styles.titleContainer2}>
                <View style={styles.footer}>

                    <View style={{alignItems: 'center'}}>
                        <Text style={{ marginTop: 15, color: '#ABABAB' }}>Đã chọn {quantity} sản phẩm</Text>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>

                            <TouchableOpacity style={styles.calculation} onPress={decrementQuantity}>
                                <Text style={{ color: '#ABABAB' }}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ marginHorizontal: 10, fontSize: 15, color: '#ABABAB' }}>{quantity}</Text>
                            <TouchableOpacity style={styles.calculation} onPress={incrementQuantity}>
                                <Text style={{ color: '#ABABAB' }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{ marginTop: 15, color: '#ABABAB' }}>Tạm tính</Text>
                        <Text style={{ color: '#ABABAB' }}>{price}</Text>
                    </View>
                </View>
                <View style={{ width: '90%' }}>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    <TouchableOpacity style={styles.addToCartButton} onPress={() => { }}>
                        <Text style={styles.addToCartButtonText}>Thêm vào giỏ hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Product;
