import React, { useState } from 'react';
import {Text, Image, View, Pressable, ScrollView, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import { useRoute } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../../../Auth/auth_config';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useUserLogin } from '../../../context/index.context';

const auth = FIREBASE_AUTH;

const SignIn = ({navigation}) => {

    const {userLogin, setUserLogin} = useUserLogin()
    const route =  useRoute();
    const [emailIp,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const data = route.params?.data;
    const [loading, setLoading] = useState(false)

    const handleSignIn = async () => {
        setLoading(true)
            // navigation.navigate('Tabs');
        try {
            const response = await signInWithEmailAndPassword(auth, emailIp.trim(), pass.trim());
            console.log(response.user);
            const {email, uid, displayName} = response.user;
            setUserLogin({
                email: email,
                uid: uid,
                name : displayName
            })
            navigation.navigate('Tabs');
        } catch (error) {
            console.log(error);
            
        }finally{
            setLoading(false)
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
            <Image style ={styles.banner}
             source={require('../../../assets/image/banner.png')}/>
            <View style={{width: '90%'}}>
            <Text style={styles.welcome}>Chào Mừng bạn</Text>
            <Text style={styles.line}>Đăng nhập tài khoản</Text>
            <Input label="Email" placeholder="example@gmail.com" changeText={setEmail} />
            <Input isPassword label="Password" placeholder="*********"  changeText={setPass}/>
            {loading ? (
                <View style={{width: '100%' , justifyContent: 'center', alignItems: 'center', height: 40}}>
                <ActivityIndicator size={34} color={'red'}/>
            </View>
            ): (
                <Button style={styles.button} title="Sign In" onPress={handleSignIn}></Button>
            )}
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
        </View>
    );
};

export default SignIn;