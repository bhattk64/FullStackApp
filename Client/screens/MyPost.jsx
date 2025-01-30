import { StyleSheet, Text, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import FooterMenus from '../components/Forms/Menus/FooterMenus'
import axios from 'axios'
import PostCard from '../components/Forms/postCard'

const MyPost = () => {
    //local state
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)

    //get user post
   const getUserPostController = async (req, res) => {
       try {
        setLoading(true);
           const {data}= await axios.get('/post/user');
           setLoading(false);
          setPost(data?.userPosts);
           res.status(200).send({ status: 'success', posts, count: posts.length, message: 'User posts' });
       }
       catch (error) {
        setLoading(false);
           res.status(500).send({ message: error.message, error });
           console.log(error); 
   }

   }

   useEffect(() => {
       getUserPostController();
   }, [])
  return (
    <View style={styles.container}>
        <ScrollView>
          <PostCard posts={post}  myPostScreen={true}/>

        </ScrollView>
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <FooterMenus/>
        </View>
      
    </View>
  )
}

export default MyPost

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    }
})