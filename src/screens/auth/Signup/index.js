import React, { useState } from 'react';
import {Text, Image, View, Pressable, ScrollView, ActivityIndicator, Alert} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import CheckBox from '../../../components/CheckBox';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import { FIREBASE_AUTH } from '../../../../Auth/auth_config';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'

const auth = FIREBASE_AUTH;
const SignUp = ({navigation}) => {
   const [checked, setChecked] = useState(false);
   const [name, setName] = useState('');
   const [sigEmail,setSigEmail] = useState('');
   const [sigPass,setSigPass] = useState('');
   const [loading, setLoading] = useState(false)

   const onSignIn = async () => {
    setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, sigEmail.trim(), sigPass.trim());
            await updateProfile(response.user, {
                displayName: name,
              });
            Alert.alert('Đăng ký thành công', 'Bạn có muốn đến trang SignIn!!', [
                {
                    text: 'cancel', 
                    style: 'cancel'
                },
                {
                    text: 'Ok',
                    onPress: () => {navigation.navigate('SignIn')}
                }
            ]);
        } catch (error) {
            console.log("Lỗi: ", error);
        } finally{
            setLoading(false)
        }
        // navigation.navigate('SignIn');
   };
    return (
        <View style= {styles.container}>
            <Image style ={styles.banner}
            source={require('../../../assets/image/banner.png')}/>
            <ScrollView style ={{width: '90%'}}>
                <Text style ={styles.welcome}>Đăng Ký</Text>
                <Text style ={styles.line}>Tạo tài khoản</Text>
            <Input label="Name" placeholder="Example John" changeText={setName}/>
            <Input label="Email" placeholder="example@gmail.com" changeText={setSigEmail}/>
            <Input isPassword label="Password" placeholder="*********" changeText={setSigPass}/>
            <View style={styles.checkRow}>
                <CheckBox checked={checked} onCheck={setChecked}></CheckBox>
                <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            {loading ? (
                <View style={{width: '100%' , justifyContent: 'center', alignItems: 'center', height: 40}}>
                    <ActivityIndicator size={34} color={'red'}/>
                </View>
            ): (
                <Button style={styles.button} title="Sign Up" onPress={() => {
                    onSignIn()
                }}></Button>
            )}
            <Seperator text="Or sign up with"></Seperator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>
                    {' '}
                    Sign In
                </Text>
            </Text>
            </ScrollView>
        </View>
    );
};

export default SignUp;