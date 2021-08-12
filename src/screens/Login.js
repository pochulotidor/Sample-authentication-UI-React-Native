import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';


export default function Login({navigation}) {
    return (

        <View style={styles.container}>

            <Text style={styles.text}>
                Login
            </Text>

            <Input
                placeholder='Email'
                autocapitalize='none'
            />

            <Input
                placeholder='Password'
                autocapitalize='none'
                secureTextEntry={true}
            />

            <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            >
                <Text style={{fontSize: 18, color: '#001242', margin: 3}}>
                    Forgot password?
                </Text>
            </TouchableOpacity>

            <Button
                buttonTitle='Login'
            />

            <Button
                buttonTitle='Create new account'
                onPress={() => navigation.navigate('CreateAccount')}
            />



        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

    text: {
        fontSize: 35,
        color: '#001242',
    }


})