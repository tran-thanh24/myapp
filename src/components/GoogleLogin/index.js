import React from "react";
import { Image, TouchableOpacity } from "react-native";
import {styles} from './styles';

const GoogleLogin = () => {
    const handleGoogleLogin = async () => {
        console.log('Test google login');
    };

    return(
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={handleGoogleLogin}
            style={styles.container}>
                <Image
                style={styles.image}
                source={require('../../assets/Google.png')}></Image>
            </TouchableOpacity>
    );
};

export default React.memo(GoogleLogin);

