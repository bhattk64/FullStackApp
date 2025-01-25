import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// context
const AuthContext = createContext();
//provider
const AuthProvider = ({ children }) => {
    //global state
    const [state, setState] = useState({ user: null, token: "" })

      //default axios setting
    axios.defaults.baseURL = 'http://172.16.103.188:8080/api'


    //inital local storage data

    useEffect(() => {
        const loadLocalStorageData = async () => {
            const data = await AsyncStorage.getItem('token')
            const loginData = JSON.parse(data)
            setState({ user: loginData?.user, token: loginData?.token })
        }
        loadLocalStorageData()
    }, [])

    return (
        <AuthContext.Provider value={{ state, setState }}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthContext, AuthProvider }