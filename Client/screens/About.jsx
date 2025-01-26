import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FooterMenus from '../components/Forms/Menus/FooterMenus'


const About = () => {
   
    return (
        <View style={styles.container}>
           <View style={{flex: 1,justifyContent: 'flex-end'}}>
           <FooterMenus />
           </View>
            
           
        </View>
    )
}

export default About

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