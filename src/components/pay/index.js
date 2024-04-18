import React from "react";
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from './styles';
import { shopingCartSlice } from "../../redux/shopingCartSlice/shopingCartSlice";
import { useDispatch } from "react-redux";

const Pay = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const { totalPrice } = route.params

    const handlePay = () => {
        Alert.alert(
            "Xác nhận",
            "Bạn có muốn thanh toán không?",
            [
                {
                    text: "Không",
                    style: "cancel"
                },
                {
                    text: "Có",
                    onPress: () => {
                        dispatch(shopingCartSlice.actions.setOrderSuccessMessage({message: `Đơn hàng đang được giao - số tiền đã thanh toán ${totalPrice}`}))
                        navigation.navigate('Notification')

                    }
                }
            ]
        );
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.leftContainer} onPress={() => { navigation.navigate('cart') }}>
                    <FontAwesomeIcon icon={faAngleLeft} size={24} />
                </TouchableOpacity>
                <Text style={styles.textLine}>Thanh Toán</Text>
                <View style={styles.rightContainer} />
            </View>
            <View style={styles.content}>
                <Text style={styles.totalPriceText}>Tổng tiền: {totalPrice}</Text>
                <TouchableOpacity style={styles.payButton} onPress={handlePay}>
                    <Text style={styles.payButtonText}>Thanh Toán</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default Pay;