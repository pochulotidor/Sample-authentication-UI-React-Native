import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';


export default function Login({navigation}) {
    return (

        <View style={styles.container}>

            <Text style={styles.text}>
               Forgot password?
            </Text>

            <Input
                placeholder='New Password'
                autocapitalize='none'
                secureTextEntry={true}
            />

            <Input
                placeholder='Confirm Password'
                autocapitalize='none'
                secureTextEntry={true}
            />


            <Button
                buttonTitle='Submit'
            />

            <Button
                buttonTitle='Login to your account'
                onPress={() => navigation.navigate('Login')}
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