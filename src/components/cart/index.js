import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { styles } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons/faCheckSquare';
import { faSquare } from '@fortawesome/free-solid-svg-icons/faSquare';
import { useSelector, useDispatch } from "react-redux";
import { shopingCartSlice } from "../../redux/shopingCartSlice/shopingCartSlice";
import { selectCartItem } from "../../redux/selector";

const { width, height } = Dimensions.get('screen')

const Cart = ({ navigation }) => {
    const listCart = useSelector(selectCartItem);
    const dispatch = useDispatch();
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // Hàm để chuyển đổi trạng thái của mục đã chọn khi người dùng nhấn vào nó
    const toggleItemSelection = (itemId) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter(id => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    // Hàm để xử lý việc xóa các mục đã chọn khỏi giỏ hàng
    const handleDeleteSelectedItems = () => {
        dispatch(shopingCartSlice.actions.removeItems(selectedItems));
        setSelectedItems([]);
    };

    //Hàm tính tổng giá trị của các sản phẩm trong giỏ hàng
    const calculateTotalPrice = () => {
        let total = 0;
        listCart.forEach(item => {
            total += item.product.price * item.quantity;
        });
        return total;
    };
    useEffect(() => {
        //Tính tổng giá trị mới mỗi khi có sự thay đổi trong của hàng
        const total = calculateTotalPrice();
        setTotalPrice(total);
    }, [listCart]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.leftContainer} onPress={() => { navigation.navigate('Home') }}>
                    <FontAwesomeIcon icon={faAngleLeft} size={24} />
                </TouchableOpacity>
                <Text style={styles.textLine}>Giỏ Hàng</Text>
                <View style={styles.rightContainer} />
            </View>
            <ScrollView>
                {listCart && listCart.length != 0 ? (
                    <View style={{ height: height * 0.85 }}>
                        <FlatList
                            data={listCart}
                            renderItem={({ item }) => {
                                const isSelected = selectedItems.includes(item.id);
                                return (
                                    <Pressable onPress={() => toggleItemSelection(item.id)}>
                                        <View style={[{ flexDirection: 'row', width: width * 0.9, marginStart: (width * 0.1) / 2, backgroundColor: isSelected ? 'lightgray' : 'white', marginVertical: 10, alignItems: 'center' }, st.shadow]}>
                                            <TouchableOpacity onPress={() => toggleItemSelection(item.id)}>
                                                {/* Chọn biểu tượng hoặc chữ để hiển thị trạng thái chọn */}
                                                <FontAwesomeIcon icon={isSelected ? faCheckSquare : faSquare} size={20} />
                                            </TouchableOpacity>
                                            <Image source={item.product.image[0]} style={{ width: 100, height: 100, marginEnd: 20 }} />
                                            <View>
                                                <Text>{item.product.name}</Text>
                                                <Text>Số Lượng: {item.quantity}</Text>
                                                <Text>Giá Tiền: {item.product.price * item.quantity}</Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                )
                            }}
                        />
                        <Text style={styles.totalPriceText}>Tổng giá trị: {totalPrice}</Text>
                        <TouchableOpacity
                            style={{
                                width: width * 0.85,
                                height: height * 0.07,
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'green',
                                alignSelf: 'center',
                                marginTop: 10
                            }}
                            onPress={handleDeleteSelectedItems}
                        >
                            <Text style={{
                                color: 'white',
                                fontWeight: '600'
                            }}>Xóa các mục đã chọn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: width * 0.85,
                                height: height * 0.07,
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'green',
                                alignSelf: 'center',
                                marginTop: 10
                            }}
                            onPress={() => { navigation.navigate('pay', { totalPrice: totalPrice }) }}
                        >
                            <Text style={{
                                color: 'white',
                                fontWeight: '600'
                            }}>Đặt Hàng</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <Text style={styles.newText}>Giỏ hàng của bạn hiện đang trống</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

const st = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    }
})

export default Cart;
