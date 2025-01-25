import React from 'react'
import Register from './screens/auth/Register'
import Login from './screens/auth/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { enableScreens } from 'react-native-screens';
import { AuthProvider } from './context/authContext'
import Home from './screens/Home'
enableScreens();


const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer >
      <AuthProvider>
        <Stack.Navigator initialRouteName="">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
      </AuthProvider>

    </NavigationContainer>
  )
}

export default App