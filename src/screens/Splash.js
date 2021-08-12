import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function Splash({ navigation }) {

    setTimeout(() => {
        navigation.replace('Login');
    }, 4000
    );

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Splash Example
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    text: {
        fontSize: 30,
        color: '#001242',
        fontWeight: 'bold'
    }
})