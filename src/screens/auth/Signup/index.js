import React, { useState } from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import CheckBox from '../../../components/CheckBox';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const SignUp = ({navigation}) => {
   const [checked, setChecked] = useState(false);
   const [sigEmail,setSigEmail] = useState(' ');
   const [sigPass,setSigPass] = useState(' ');

   const onSignIn = () => {
    console.log('Test Sign in');
   };
    return (
        <View style= {styles.container}>
            <AuthHeader title="Sign Up" />
            <Input label="Name" placeholder="Example John" />
            <Input label="Email" placeholder="example@gmail.com" changeText={setSigEmail}/>
            <Input isPassword label="Password" placeholder="*********" changeText={setSigPass}/>
            <View style={styles.checkRow}>
                <CheckBox checked={checked} onCheck={setChecked}></CheckBox>
                <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button style={styles.button} title="Sign Up" onPress={() =>
                 navigation.navigate('SignIn',{data:{email:sigEmail,pass:sigPass}})}></Button>
            <Seperator text="Or sign up with"></Seperator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>
                    {' '}
                    Sign In
                </Text>
            </Text>
        </View>
    );
};

export default SignUp;