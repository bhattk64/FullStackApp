import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import fontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const FooterMenus = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <fontAwesome5 name="home" style={styles.iconStyle}/>
                <Text>Home</Text>
            </TouchableOpacity>
            <fontAwesome5 name="search" style={styles.iconStyle}/>
            <TouchableOpacity>
                <fontAwesome5 name="plus" style={styles.iconStyle}/>
                <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <fontAwesome5 name="user" style={styles.iconStyle}/>
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