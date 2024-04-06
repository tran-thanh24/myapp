import React from "react";
import { Text, Image, View, Pressable } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";

const Splash = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode="contain"
                style={styles.img}
                source={require('../../../assets/thanh.png')}
            />
        <View style={styles.titleContainer}>
            <Text style={styles.title}>You'll Find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
            <Text style={styles.title}>Here!</Text>
        </View> 

        <Button 
        onPress = {() => navigation.navigate('SignIn')}
        title="Let's go"></Button>
        </View>
    );
};

export default Splash;