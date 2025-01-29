import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FooterMenus from '../components/Forms/Menus/FooterMenus.jsx';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'; 
import { useState,useContext } from 'react';
import { postContext } from '../context/postContext.jsx';



const Post = ({ navigation }) => {
    //global state
    const [posts,setPosts] = useContext(postContext);
    //local state
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    //handle post data
    const handlePost = async() => {
        try{
            setLoading(true);
            if(!title || !description){
                Alert.alert('Error', 'Please fill all the fields');
                return;
            }
            const {data} = await axios.post('http://172.16.103.188:8080/api/v1/posts', {
                title,
                description
            })
            setLoading(false);
           setPosts([...posts, data?.post]);
            Alert.alert('Success', 'Post created successfully');
            setTitle('');
            setDescription('');
            navigation.navigate('Home');


        }
        catch{
            Alert.alert('Error', 'Error in posting data');
            setLoading(false);
            console.log('Error in posting data');

        }
       
        }
            
        
        
    
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.heading}>Create a New Post</Text>
                        <TextInput style={styles.inputBox} placeholder='Title' 
                        value='title' onChangeText={(text) => setTitle(text)} />
                        <TextInput style={styles.inputBox} placeholder='Description'
                            value='description' onChangeText={(text) => setDescription(text)}
                            multiline={true} numberOfLines={4}

                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.postBtn} onPress={handlePost}>
                            <Text style={styles.postBtnText}>
                                <Fontawesome name="plus" size={20} color="white" />{' '}

                                Create a New Post</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.content}>

                    <Text style={styles.description}>
                        Share your thoughts and ideas with the community.
                    </Text>
                </View>


            </View>
        );
    };

    export default Post;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            padding: 20,
        },
        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        description: {
            fontSize: 16,
            textAlign: 'center',
            color: '#666',
        },
        heading: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
            marginTop: 10
        },
        inputBox: {
            width: '100%',
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            padding: 10,
            borderRadius: 5

        },
        postBtn: {
            width: '100%',
            height: 40,
            backgroundColor: '#f4511e',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            marginBottom: 10
        },
        postBtnText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold'
        }
    });