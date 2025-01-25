import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import InputBox from '../../components/Forms/InputBox'
import SubmitButton from '../../components/Forms/SubmitButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'


const Login = ({ navigation }) => {
    //global state
    const { state, setState } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        try {
            setLoading(true)
            if (!email || !password) {
                Alert.alert('Please fill all the fields')
                setLoading(false)
                return
            }
            setLoading(false)
            const { data } = await axios.post('/users/login', {
                email, password
            })
            setState(data)
           await AsyncStorage.setItem('token', data.token)
           Alert(data && data.message)
            navigation.navigate('Home')
            console.log('register, data==>', { email, password })
        }
        catch (error) {
            Alert(error.response.data.message)
            setLoading(false)
            console.log(error)
        }

    }

    //temporary code to chech local storage
    const localData = async () => {
        const token = await AsyncStorage.getItem('token')
        console.log(token)
    }
    localData()



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={{ marginHorizontal: 20 }}>
                <InputBox title="Email" value={email} keyboardType="email-address" autocomplete="email" setValue={setEmail} />
                <InputBox title="Password" value={password} secureTextEntry autocomplete="password" setValue={setPassword} />
            </View>
            {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}

            <SubmitButton submitButton="Login"
                loading={loading}
                handleSubmitButton={handleSubmit}

            />
            <Text style={styles.linkText}>Don't have an account? Please <Text style={{ color: 'blue', textDecorationLine: 'underline', fontWeight: 'bold', fontSize: 16 }}
                onPress={() => navigation.navigate('Register')}>LOGIN</Text></Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(64, 36, 128, 0.5)'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 20

    },
    inputBox: {
        height: 40,
        backgroundColor: 'white',
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 5,
        paddingLeft: 5,

    },
    linkText: {
        marginTop: 10,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 16,


    },
})