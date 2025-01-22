import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/Forms/InputBox'
import SubmitButton from '../../components/Forms/SubmitButton'


const Login = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={{ marginHorizontal: 20 }}>
                <InputBox title="Email" value={email} setEmail={setEmail} />
                <InputBox title="Password" value={password} setPassword={setPassword} />
            </View>
            {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}

            <SubmitButton submitButton="Login"
                loading={loading}
                handleSubmitButton={() => {

                    setLoading(true)
                    setTimeout(() => {
                        setLoading(false)
                    }, 3000)

                }}

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