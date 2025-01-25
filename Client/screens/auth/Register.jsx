import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/Forms/InputBox'
import SubmitButton from '../../components/Forms/SubmitButton'
import { Alert } from 'react-native'
import axios from 'axios'



const Register = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      if (!name || !email || !password) {
        Alert.alert('Please fill all the fields')
        setLoading(false)
        return
      }
      
      setLoading(false)
      const { data } = await axios.post('/users/register', {
        name, email, password
      })
      Alert(data && data.message)
      navigation.navigate('Login')
      console.log('register, data==>', { name, email, password })
    }
    catch (error) {
      Alert(error.response.data.message)
      setLoading(false)
      console.log(error)

    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox title="Name" value={name} setName={setName} />
        <InputBox title="Email" keyboardType="email-address" autocomplete="email" value={email} setValue={setEmail} />
        <InputBox title="Password" secureTextEntry={true} autocomplete="password" value={password} setValue={setPassword} />
      </View>
      {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}

      <SubmitButton submitButton="Register"
        loading={loading}
        handleSubmitButton={handleSubmit}

      />
      <Text style={styles.linkText}>Already have an account? Please <Text style={{ color: 'blue', textDecorationLine: 'underline', fontWeight: 'bold', fontSize: 16  } } onPress={() => navigation.navigate('Login') }>LOGIN HERE!!</Text>{' '} </Text>
    </View>
  )
}

export default Register

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