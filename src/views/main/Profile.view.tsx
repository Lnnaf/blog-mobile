import React, { FunctionComponent } from "react";
import { Button, Text, View } from "react-native";
import { useLogin } from "../../context/login/login.provider";

import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProfileViewProps {

}

const ProfileView: FunctionComponent<ProfileViewProps> = () => {
    const {setIsLoggedIn} = useLogin()

    const onPressLogout = () => {
         AsyncStorage.setItem('access_token', '')
         .then(() => {setIsLoggedIn(false)})
    }

    return (
        <View>
            <Text>{'Profile view'}</Text>
            <Button title="Logout" onPress={onPressLogout }></Button>
        </View>
    );
}

export default ProfileView;