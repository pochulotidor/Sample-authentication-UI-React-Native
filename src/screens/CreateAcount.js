import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';


export default function CreateAccount({navigation}) {
    return (

        <View style={styles.container}>

            <Text style={styles.text}>
                Create Account
            </Text>

            <Input
                placeholder='Email'
                autocapitalize='none'
            />

            <Input
                placeholder='First name'
                
            />

            <Input
                placeholder='Last name'
               
            />

            <Input
                placeholder='Password'
                autocapitalize='none'
                secureTextEntry={true}
            />

            <Input
                placeholder='Confirm password'
                autocapitalize='none'
                secureTextEntry={true}
            />

            <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            >
                <Text style={{ fontSize: 18, color: '#001242', margin: 3 }}>
                    Already have an account?
                </Text>
            </TouchableOpacity>

            <Button
                buttonTitle='Submit'
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