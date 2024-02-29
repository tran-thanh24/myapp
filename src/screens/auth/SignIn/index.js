import React, { useState } from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import ListUser from '../../app/listUser';
import Crud from '../../app/CRUD'
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import { useRoute } from '@react-navigation/native';
const SignIn = ({navigation}) => {
    const route =  useRoute();
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const data = route.params?.data;

    const handleSignIn = () => {
        if(data && data.email === email && data.pass === pass) {
            navigation.navigate(Crud);
        }else{
            alert('Login Error');
        }
    };
    const onSignUp = () => {
        navigation.navigate('SignUp');
    };

    const onBack = () => {
        navigation.goBack();
    }
    return (
        <View style= {styles.container}>
            <AuthHeader title="Sign In" />
            <Input label="Email" placeholder="example@gmail.com" changeText={setEmail} />
            <Input isPassword label="Password" placeholder="*********"  changeText={setPass}/>
            <Button style={styles.button} title="Sign In" onPress={handleSignIn}></Button>
            {/* <Button style={styles.button} title="Sign In" onPress={() => {
                console.log(data);
            return   data.email === email & data.pass === pass ? alert('Login Success') : alert('login Error');
            }}></Button> */}
            <Seperator text="Or sign up with"></Seperator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>
                Don't have an account?
                <Text onPress={onSignUp} style={styles.footerLink}>
                    {' '}
                    Sign Up
                </Text>
                </Text>
        </View>
    );
};

export default SignIn;