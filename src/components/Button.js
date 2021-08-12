import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { height } from '../utils/Dimensions';

export default function Button ({ buttonTitle, ...rest }) {
    return (
        <TouchableOpacity style={styles.button} {...rest}>

            <Text style={styles.text}>
                {buttonTitle}
            </Text>

        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: height / 20,
        backgroundColor: '#001242',
        marginTop: 10,
        borderRadius: 10
    },

    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    }
})