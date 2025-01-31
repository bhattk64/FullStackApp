import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const EditModal = ({ modalVisible, setModalVisible, posts }) => {

    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    //handle update post
    const handleUpdatePost = async (id) => {
        try {
            setLoading(true);
            const { data } = await axios.put(`post//update/:id/${id}`, {
                title,
                description

            })
            setLoading(false);
            Alert.alert('Success', 'Post updated successfully');
            navigation.push('MyPost');
        } catch (error) {
            setLoading(false);
            console.error(error);
            Alert.alert('Error', error.message);
        }

    }


    //inital post  data
    useEffect(() => {
        setTitle(posts?.title);
        setDescription(posts?.description);
    }, [posts])


    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Update Your Posts</Text>
                            <Text>Title</Text>
                            <TextInput style={styles.inputBox} value={title} onChangeText={(text) => setTitle(text)} />
                            <Text>Description</Text>
                            <TextInput style={styles.inputBox} multiline numberOfLines={4} value={description} onChangeText={(text) => setDescription(text)} />
                            <View style={styles.btnContainer}>
                                <Pressable
                                    style={styles.button}
                                    onPress={() => { handleUpdatePost(posts && posts._id), setModalVisible(!modalVisible) }}>
                                    <Text style={styles.textStyle}>{loading ? 'Loading...Please Wait' : 'Update Post'}</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Cancel </Text>
                                </Pressable>
                            </View>

                        </View>
                    </View>
                </Modal>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default EditModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    btnContainer: {
        width: '100%',
        flexDirection: 'row',

    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    inputBox: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 5,
        paddingLeft: 5,

    }
})