import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginView from '../../auth/Login.view';
import SignUpView from '../../auth/Signup.view';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'>
                <Stack.Screen 
                name="Login" 
                component={LoginView} 
                options = {{
                    headerShown: false
                }}/>
                <Stack.Screen
                    name="SignUp"
                    component={SignUpView}
                    options={
                        {headerTitle:'Signup',}
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthStack