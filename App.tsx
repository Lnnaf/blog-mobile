/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useEffect, useContext } from 'react';
import {
	SafeAreaView,
} from 'react-native';

import HomeView from './src/Main.navigator';
import LoginView from './src/views/auth/Login.view';
import LoginProvider, { useLogin } from './src/context/login/login.provider';
import AuthNavigator from './src/views/auth/Auth.navigator';



const App = () => {
	return (
		<SafeAreaView  style={{flex:1}}>
			<LoginProvider>
				<AuthNavigator />
			</LoginProvider>
		</SafeAreaView>
	);
};

export default App;
