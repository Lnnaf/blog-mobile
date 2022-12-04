import React, { createContext, ReactNode, useContext, useState, useEffect} from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import SplashScreen from 'react-native-splash-screen'

interface LoginContextInterface {
    isLoggedIn: boolean;
    setIsLoggedIn: any
  }
const LoginContext = createContext<LoginContextInterface>({isLoggedIn: false, setIsLoggedIn: null})

const LoginProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('access_token')
            if (value !== null) {
                return value
            }
        } catch (e) {
            // error reading value
        }
    }
    useEffect(() => {
        const a = getData().then(res => {
            axios.get('http://localhost:8080/api/v1/auth/check-token', {
                headers: {
                    'Authorization': `Bearer ${res}`,
                }
            }).then((res) => {
                if (res.status === 200) {
                    setIsLoggedIn(true)
                }
            }).catch((err) => {console.log(err)})
            .finally( () => {
                SplashScreen.hide()
            })
        } )
    }, [])
    return (
        <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => useContext(LoginContext)
export default LoginProvider