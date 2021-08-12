import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { height, width } from '../utils/Dimensions';

export default function Input({ placeholder, value, ...rest }) {
    return (
        <TextInput
            style={styles.input}
            {...rest}
            placeholder={placeholder}
            value={value}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: height / 20,
        borderBottomWidth: 1,
        borderBottomColor: '#001242',
        marginBottom: 10

    }
})