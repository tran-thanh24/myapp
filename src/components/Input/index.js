import React, {useState} from "react";  
import {Text, TextInput, View, Pressable, Image} from 'react-native';
import {styles} from './styles';

const Input = ({label, placeholder, isPassword,changeText}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.InputContainer}>
                <TextInput 
                secureTextEntry={isPassword && !isPasswordVisible}
                placeholder={placeholder} 
                style={styles.input}
                onChangeText={changeText}
                />
                {
                    isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image
                            style={styles.eye}
                            source={
                                isPasswordVisible
                                ? require('../../assets/eye.png')
                                : require('../../assets/eye_closed.png')
                            }
                            />
                        </Pressable>
                    ) : null
                }
              
            </View>
        </View>
    );
};

export default Input;
