import React from "react";
import {Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {styles} from './styles'
import { SafeAreaView } from "react-native-safe-area-context";

const Notification = () => {
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.leftContainer} onPress={() => {}}>
                    <Image source={require('../../../assets/image/back.png')} style={styles.leftIcon} />
                </TouchableOpacity>
                <Text style={styles.textLine}>Thông Báo</Text>
                <View style={styles.rightContainer} />
            </View>
            <View>
                    <Text style ={styles.newText}>Hiện chưa có thông báo nào cho bạn</Text>
                </View>
        </SafeAreaView>
    );
};

export default Notification;