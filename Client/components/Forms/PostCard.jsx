import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const PostCard = ({ posts, myPostScreen }) => {
    const[loading, setLoading] = useState(false)
    const navigation = useNavigation()
    const handleDelete = () => {
        Alert.alert('Delete Post', 'Are you sure you want to delete this post?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
            }
        ])
    }
    //delete post data
    const deletePostController = async (id) => {
        try {
            setLoading(true);
            const {data}= await axios.delete(`/post/delete/${id}`);
            setLoading(false);
            Alert.alert('Success', 'Post deleted successfully');
            navigation.navigate('Home');
            
        }
        catch (error) {
            setLoading(false);
            res.status(500).send({ message: error.message, error });
        }
    }
    
    return (
        //delete prompt
       
        <View>
            <Text style={styles.heading}>Total Posts {posts?.length}</Text>
            {posts?.map((post, index) => (
                <View style={styles.card} key={index}>
                    {myPostScreen && (
                        <View>
                            <Text style={{ textAlign: 'right' }}>
                                <FontAwesome name="trash" color="black"  onPress={()=> handleDelete(post?._id)}/>
                            </Text>
                        </View>
                    )}
                    <Text style={styles.heading}>{post?.title}</Text>
                    <Text style={{ marginTop: 10 }}>{post?.description}</Text>
                    <View style={styles.footer}>
                        {post?.postedBy?.name && (


                            <Text >{post?.postedBy?.name}</Text>
                        )}
                        <Text >{post?.createdAt}</Text>

                    </View>
                </View>

            ))}
        </View>
    )
}

export default PostCard

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',

    },
    card: {
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10

    },
    heading: {
        fontSize: 20,
        color: 'black',

    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',


    }
})