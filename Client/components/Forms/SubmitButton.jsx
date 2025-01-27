 import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SubmitButton = ({handleSubmitButton, submitButton,loading}) => {
  return (
  <TouchableOpacity style={styles.submitButton}  onPress={handleSubmitButton}>
    <Text style={styles.button}>
        {loading ? 'Loading...Please Wait' : submitButton}
        </Text>
  </TouchableOpacity>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    submitButton:{
        backgroundColor: '#4CAF50',
        padding: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,

    },
    button:{
        color: 'white',
        textAlign: 'center'
    }
})