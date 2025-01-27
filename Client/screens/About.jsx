import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FooterMenus from '../components/Forms/Menus/FooterMenus.jsx';

const About = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>About Us</Text>
                <Text style={styles.description}>
                    Welcome to our app! This is the About page where you can learn more about our mission and team.
                </Text>
            </View>
            <FooterMenus />
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
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