import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../../screens/Home.jsx'
import Register from '../../../screens/auth/Register.jsx'
import Login from '../../../screens/auth/Login.jsx'
import { AuthContext } from '../../../context/authContext.jsx'
import HeaderMenu from './HeaderMenu.jsx'
import Post from '../../../screens/Post.jsx'
import About from '../../../screens/About.jsx'
import Account from '../../../screens/Account.jsx'
import MyPost from '../../../screens/MyPost.jsx'




const Stack = createNativeStackNavigator()
const ScreenMenu = () => {
    //global state
    const [state] = useContext(AuthContext)
    //auth condition variable
    const authCondition = state?.user && state?.token
    return (


        <Stack.Navigator initialRouteName="Login">
            {authCondition ? (<><Stack.Screen name="Home" component={Home}
                options={{ title: 'Home', headerRight: () => <HeaderMenu>Logout</HeaderMenu> }} />
                <Stack.Screen name="Post" component={Post}
                    options={{ headerBackTitle: 'Back', headerRight: () => <HeaderMenu /> }} />

                <Stack.Screen name="About" component={About}
                    options={{ headerBackTitle: 'Back', headerRight: () => <HeaderMenu /> }} />

                <Stack.Screen name="MyPosts" component={MyPost}
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