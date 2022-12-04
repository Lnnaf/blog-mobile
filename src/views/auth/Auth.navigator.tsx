import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import LoginProvider, { useLogin } from "../../context/login/login.provider";
import LoginView from "./Login.view";
import AuthStack from "../stack/account/Auth.stack";
import MainStack from "../../Main.navigator";

interface Props {
    
}
 
const AuthNavigator: FunctionComponent<Props> = () => {
    const {isLoggedIn} = useLogin()
    
    return (  
        isLoggedIn ? <MainStack /> : <AuthStack />
    );
}
 
export default AuthNavigator;