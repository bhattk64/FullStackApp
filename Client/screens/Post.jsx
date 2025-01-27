import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FooterMenus from '../components/Forms/Menus/FooterMenus.jsx';

const Post = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Create a New Post</Text>
                <Text style={styles.description}>
                    Share your thoughts and ideas with the community.
                </Text>
            </View>
            <FooterMenus />
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
});