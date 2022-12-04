import React, { FunctionComponent } from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLogin } from "./context/login/login.provider";
import BottomNavigator from "./views/main/Bottom.navigator";


const MainStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <BottomNavigator/>
      </NavigationContainer>
    );
}

export default MainStack;