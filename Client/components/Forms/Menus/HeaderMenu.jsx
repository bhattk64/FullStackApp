import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../../../context/authContext.jsx'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HeaderMenu = () => {
    const[state,setState] = useContext(AuthContext)

    //logout
    const handleLogout =async () => {
        setState({ user: null, token: "" })
        await AsyncStorage.removeItem('user')
        Alert.alert("Logout Success")
       
    }
  return (
    <View>
     <TouchableOpacity onPress={handleLogout}>
            <FontAwesome5 name="sign-out-alt" style={styles.iconStyle}/>
        
     </TouchableOpacity>
    </View>
  )
}

export default HeaderMenu

const styles = StyleSheet.create({
    iconStyle:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 5,
        marginTop: 5
    }
})