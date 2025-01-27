import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputBox = ({ title, value, onChange}) => {
    return (
        <View>
            <Text>{title}</Text>
            <TextInput style={styles.inputBox}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={title === 'Email' ? 'email-address' : 'default'}
                secureTextEntry={title === 'Password' }
                value={value}
                onChangeText={onChange}
                placeholder={`Enter ${title}`}


            />
        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    inputBox: {
        height: 40,
        backgroundColor: 'white',
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 5,
        paddingLeft: 5,

    },
})