import { Alert, StyleSheet, Text, TouchableOpacity, View,ScrollView ,Image} from 'react-native'
import React from 'react'
import FooterMenus from '../components/Forms/Menus/FooterMenus'
import { AuthContext } from '../context/authContext'
import { useContext,useState } from 'react'

import { TextInput } from 'react-native-gesture-handler'
import axios from 'axios'


const Account = () => {
    //global state
    const [state,setState] = useContext(AuthContext)
    //local state
    const[user,setUser]=useState(user?.name)
    const[password,setPassword]=useState(user?.password)
    const[email]=useState(user?.email)
    const [loading, setLoading] = useState(false)

    //handle update user data
    const handleUpdate =async () => {
        try{
           setLoading(true)
           const {data}= await axios.put(`http://localhost:5000/api/v1/users/${state?.user._id}`,{
               name:user,
               password:password
           })
            setLoading(false)
            let user = JSON.stringify(data)
            setState({type:'LOGIN',payload:user})
            Alert.alert('Success', 'Your account details has been updated')

        }

        catch(err){
           
            Alert.alert('Error', 'Something went wrong')
            setLoading(false)
            console.log(err)
       
        
           
            }
    }
    return (
        <View style={styles.container}>
            <ScrollView>

            
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: 'https://imgs.search.brave.com/GTciTfNisqdPU0yVTnpyoDolBSpKYl9K6y6H7BOjDlg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAx/MzkxNTc2NC9waG90/by91c2VyLWljb24t/aW4tZmxhdC1zdHls/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UEotMnZvUWZh/Q3hhZUNsdzZYYlVz/QkNaT3NTTjlIVWVC/SUg1Qk82VmRScz0https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
            </View>
            <Text style={styles.warningText}>You can only see your account details</Text>
            <View style={styles.input}>
                <Text style={styles.inputText}>Name</Text>
                <TextInput style={styles.inputBox} 
               onChangeText={(text)=>setUser(text)}
                value={name} placeholder='Name' />
            </View>
            <View style={styles.input}>
                <Text style={styles.inputText}>Email</Text>
                <TextInput style={styles.inputBox}
                editable={false}
                value={email} placeholder='Email' />
            </View>

            <View style={styles.input}>
                <Text style={styles.inputText}>Phone</Text>
                <TextInput style={styles.inputBox} value={state?.user.phone} placeholder='Phone' />
            </View>
            <View style={styles.input}>
                <Text style={styles.inputText}>Password</Text>
                <TextInput style={styles.inputBox} 
                onChangeText={(text)=>setPassword(text)}
                value={password} placeholder='Password' />
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}>
                    <Text style={styles.updateBtnText}>Update</Text>
                    </TouchableOpacity>
            </View>
            </ScrollView>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                <FooterMenus />
            </View>

        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 50
    },
    warningText: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 8,
        margin: 10,
        width: 200
    },
    inputText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        marginBottom: 10
    },
    inputBox: {
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 8,
        margin: 10,
        width: 200
    },
    updateBtn:{
        backgroundColor:'red',
        padding:10,
        borderRadius:5,
        width:200,
        alignItems:'center',
        justifyContent:'center'

    },
    updateBtnText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})