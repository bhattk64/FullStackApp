import { Alert, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import React, { useContext, useState } from 'react';
import FooterMenus from '../components/Forms/Menus/FooterMenus';
import { AuthContext } from '../context/authContext';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

const Account = () => {
    // Global state
    const [state, setState] = useContext(AuthContext);

    // Local state
    const [user, setUser] = useState(state?.user?.name || '');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Handle update user data
    const handleUpdate = async () => {
        try {
            setLoading(true);
            const { data } = await axios.put(
                `http://172.16.103.188:8080/api/v1/users/${state?.user._id}`,
                { name: user, password }
            );
            setLoading(false);
            setState({ ...state, user: data.user }); // Update global state
            Alert.alert('Success', 'Your account details have been updated');
        } catch (err) {
            setLoading(false);
            Alert.alert('Error', 'Something went wrong');
            console.error(err);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.warningText}>You can only see your account details</Text>

                <View style={styles.input}>
                    <Text style={styles.inputText}>Name</Text>
                    <TextInput
                        style={styles.inputBox}
                        onChangeText={setUser}
                        value={user}
                        placeholder="Name"
                    />
                </View>

                <View style={styles.input}>
                    <Text style={styles.inputText}>Email</Text>
                    <TextInput
                        style={styles.inputBox}
                        editable={false}
                        value={state?.user?.email}
                        placeholder="Email"
                    />
                </View>

                <View style={styles.input}>
                    <Text style={styles.inputText}>Phone</Text>
                    <TextInput
                        style={styles.inputBox}
                        value={state?.user?.phone}
                        placeholder="Phone"
                    />
                </View>

                <View style={styles.input}>
                    <Text style={styles.inputText}>Password</Text>
                    <TextInput
                        style={styles.inputBox}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Password"
                        secureTextEntry
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}>
                        <Text style={styles.updateBtnText}>
                            {loading ? 'Updating...' : 'Update'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <FooterMenus />
        </View>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    warningText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        marginBottom: 15,
    },
    inputText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    inputBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    updateBtn: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    updateBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});