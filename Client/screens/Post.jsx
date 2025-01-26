import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FooterMenus from '../components/Forms/Menus/FooterMenus'


const Post = () => {

    return (
        <View style={styles.container}>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <FooterMenus />
            </View>

        </View>
    )
}

export default Post

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