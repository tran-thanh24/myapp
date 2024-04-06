import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles'
import { Image, Text, TouchableOpacity, View } from "react-native";

const Product = () => {
    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.leftContainer} onPress={() => { }}>
                    <Image source={require('../../assets/momo/back.png')} style={styles.leftIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>Spider Plant</Text>
                <TouchableOpacity style={styles.rightContainer} onPress={() => { }}>
                    <Image source={require('../../assets/momo/shopping-cart.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#F6F6F6' }}>
                <Image source={require('../../assets/momo/1.png')} style={styles.image} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.textLine}>Cây Trồng</Text>
                <Text style={{ marginTop: 15, fontSize: 30, color: '#007537' }}>$10 - Pink Anthurium</Text>
                <Text style={{ marginTop: 15, fontSize: 20, borderBottomWidth: 0.3 }}>Chi tiết sản phẩm</Text>
                <View style={styles.text}>
                    <Text style={{ marginTop: 15, fontSize: 18, }}>Kích cỡ</Text>
                    <Text style={{ marginTop: 15, fontSize: 18, }}>Nhỏ</Text>
                </View>
                <View style={styles.text}>
                    <Text style={{ marginTop: 15, fontSize: 18, }}>Xuất xứ</Text>
                    <Text style={{ marginTop: 15, fontSize: 18, }}>Châu Phi</Text>
                </View>
                <View style={styles.text}>
                    <Text style={{ marginTop: 15, fontSize: 18, }}>Tình trạng</Text>
                    <Text style={{ marginTop: 15, fontSize: 18, color: '#007537' }}>Còn 156 sp</Text>
                </View>
            </View>
            <View style={styles.titleContainer2}>
                <View style={styles.footer}>
                    <Text style={{ marginTop: 15, color: '#ABABAB' }}>Đã chọn {quantity} sản phẩm</Text>
                    <Text style={{ marginTop: 15, color: '#ABABAB' }}>Tạm tính</Text>
                </View>
                <View style={{width: '90%'}}>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <TouchableOpacity style={styles.calculation} onPress={decrementQuantity}>
                            <Text style={{ color: '#ABABAB' }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{marginHorizontal: 10, fontSize: 15, color: '#ABABAB'}}>{quantity}</Text>
                        <TouchableOpacity style={styles.calculation} onPress={incrementQuantity}>
                            <Text style={{ color: '#ABABAB' }}>+</Text>
                        </TouchableOpacity>
                    </View>
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
