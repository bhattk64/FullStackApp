import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext.jsx';
import FooterMenus from '../components/Forms/Menus/FooterMenus.jsx';

const Home = () => {
    const [state] = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome, {state?.user?.name || 'Guest'}!</Text>
                <Text style={styles.description}>
                    You are logged in with the email: {state?.user?.email}
                </Text>
            </View>
            <FooterMenus />
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