import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../../screens/Home'
import Register from '../../../screens/auth/Register'
import Login from '../../../screens/auth/Login'
import { AuthContext } from '../../../context/authContext'
import HeaderMenu from './HeaderMenu'
import Post from '../../../screens/Post'
import About from '../../../screens/About'
import Account from '../../../screens/Account'

//global state
const [state] = useContext(AuthContext)
//auth condition variable
const authCondition = state?.user && state?.token

const Stack = createNativeStackNavigator()
const ScreenMenu = () => {
    return (


        <Stack.Navigator initialRouteName="Login">
            {authCondition ? (<><Stack.Screen name="Home" component={Home}
                options={{ title: 'Home', headerRight: () => <HeaderMenu>Logout</HeaderMenu> }} />
                <Stack.Screen name="Post" component={Post}
                    options={{ headerBackTitle: 'Back', headerRight: () => <HeaderMenu /> }} />

                <Stack.Screen name="About" component={About}
                    options={{ headerBackTitle: 'Back', headerRight: () => <HeaderMenu /> }} />

                <Stack.Screen name="Account" component={Account}
                    options={{ headerBackTitle: 'Back', headerRight: () => <HeaderMenu /> }} />


            </>) : (
                <>
                    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                </>
            )}


        </Stack.Navigator>

    )
}

export default ScreenMenu

const styles = StyleSheet.create({})