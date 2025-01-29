import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostCard = ({ posts }) => {
    return (
        <View>
            <Text style={styles.heading}>Total Posts {posts?.length}</Text>
            {posts?.map((post, index) => (
                <View style={styles.card} key={index}>
                    <Text style={styles.heading}>{post?.title}</Text>
                    <Text style={{ marginTop: 10 }}>{post?.description}</Text>
                    <View style={styles.footer}>
                        {post?.postedBy?.name &&(
                            
                      
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