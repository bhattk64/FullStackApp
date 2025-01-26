import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FooterMenus from '../components/Forms/Menus/FooterMenus'
import { AuthContext } from '../context/authContext'
import { useContext } from 'react'


const Account = () => {
    const [state] = useContext(AuthContext)
    return (
        <View style={styles.container}>

           <View style={{flex: 1,justifyContent: 'flex-end'}}>
            <Text>Name:{state?.user.name}</Text>
            <Text>Email:{state?.user.email}</Text>
            <Text>Phone:{state?.user.phone}</Text>
            
           <FooterMenus />
           </View>
           
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 50
    }
})