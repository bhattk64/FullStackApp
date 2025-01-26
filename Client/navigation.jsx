import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  AuthProvider } from './context/authContext'
import ScreenMenu from './components/Forms/Menus/ScreenMenu'

const Rootnavigation = () => {
  return (
   <AuthProvider>
        <ScreenMenu />
   </AuthProvider>

  )
}

export default Rootnavigation

const styles = StyleSheet.create({})