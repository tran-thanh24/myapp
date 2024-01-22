import React from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const SignIn = () => {
    return (
        <View style= {styles.container}>
            <AuthHeader title="Sign In" />
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="*********"/>
            <Button style={styles.button} title="Sign In"></Button>
            <Seperator text="Or sign up with"></Seperator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>
                Don't have an account?Sign Up
                </Text>
        </View>
    );
};

export default SignIn;