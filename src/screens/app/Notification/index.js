import React, { useState } from "react";
import {Image, ScrollView, Text, TouchableOpacity, View ,FlatList, Pressable} from "react-native";
import {styles} from './styles'
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { selectNotification } from "../../../redux/selector";


const Notification = () => {
    const [listNotification,setListNofication] = useState(useSelector(selectNotification) || []);
     console.log(listNotification)
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
            {
               listNotification.length > 0 ? <FlatList 
                data={listNotification}
                renderItem={(item,index) => <Pressable>
                    <Text>{item.item.message}</Text>
                    <Text>{item.item.date.toString()}</Text>
                </Pressable>}
               /> : <Text>Chưa có thông bao </Text>
            }
          </View>
        </SafeAreaView>
    );
};

export default Notification;