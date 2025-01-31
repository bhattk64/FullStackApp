import { StyleSheet, Text, View, RefreshControl } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext.jsx';
import FooterMenus from '../components/Forms/Menus/FooterMenus.jsx';
import { postContext } from '../context/postContext.jsx';
import { ScrollView } from 'react-native-gesture-handler';
import PostCard from '../components/Forms/postCard.jsx';

const Home = () => {

    const [posts, setPosts] = useContext(postContext);
    const [refreshing, setRefreshing] = React.useState(false);
    //refresh control
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setPosts([]);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} >
                <PostCard posts={posts} />

                {/* <Text> {json.stringify(posts, null, 2)}  </Text> */}
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <FooterMenus />
            </View>

        </View>
    );
};

export default Home;

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