import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import FooterMenus from '../components/Forms/Menus/FooterMenus'

const Home = () => {
    //global state
    const [state] = useContext(AuthContext)
    return (
        <View style={styles.container}>
           
            <Text>{JSON.stringify(state, null, 4)}</Text>
            <FooterMenus />
        </View>
    )
}

export default Home

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