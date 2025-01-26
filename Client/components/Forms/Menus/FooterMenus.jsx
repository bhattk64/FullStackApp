import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation, useRoute } from '@react-navigation/native';

//hooks
const navigation = useNavigation()
const route = useRoute()
const FooterMenus = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <FontAwesome5 name="home" style={styles.iconStyle}
                    color={route.name === 'Home' ? 'red' : 'white'}

                />
                <Text>Home</Text>
            </TouchableOpacity>
            <FontAwesome5 name="search" style={styles.iconStyle} />
            <TouchableOpacity onPress={() => navigation.navigate('Post')}>
                <FontAwesome5 name="plus" style={styles.iconStyle}
                    color={route.name === 'Post' ? 'red' : 'white'} />
                <Text>About</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                <FontAwesome5 name="user" style={styles.iconStyle}
                    color={route.name === 'Account' ? 'red' : 'white'}

                />
                <Text>Account</Text>
            </TouchableOpacity>

        </View>
    )
}

export default FooterMenus

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#4CAF50',
        padding: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    },
    iconStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 5
    }
})