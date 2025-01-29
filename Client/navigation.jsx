import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthProvider } from './context/authContext'
import ScreenMenu from './components/Forms/Menus/ScreenMenu'
import { PostProvider } from './context/postContext'

const Rootnavigation = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <ScreenMenu />
      </PostProvider>

    </AuthProvider>

  )
}

export default Rootnavigation

const styles = StyleSheet.create({})