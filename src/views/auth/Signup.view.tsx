import React, { FunctionComponent, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, ScrollView, Image, ActivityIndicator, Alert } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAt, faLock, faFaceSmile, faEnvelope, faMobile, faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import ButtonCustom from "../../components/button";
import { images } from '../../../assets/images/index'
interface SignUpViewProps {
	navigation: any
}


const SignUpView: FunctionComponent<SignUpViewProps> = (props) => {

	const [isLoading, setIsLoading] = useState(false)

	const onPressSignUp = () => {
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
			Alert.alert(
				"Signup successfully",
				"Please back to Login",
				[
					{ text: "OK", onPress: () => {props.navigation.navigate('Login');} }
				]
			);
		}, 3000);

	}
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "position" : "position"}
			style={{ backgroundColor: "white", height: '100%' }}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView style={styles.body}>
					<Image
						style={styles.image}
						source={images.signup_banner}
					/>

					<View style={styles.groupInput}>
						<View style={styles.iconInput} >
							<FontAwesomeIcon icon={faAt} />
						</View>

						<TextInput
							autoCapitalize="none"
							autoCorrect={false}
							placeholder={'Email/ username'}
							style={styles.input}
							onChangeText={() => { }}
						/>
					</View>
					<View style={styles.groupInput}>
						<View style={styles.iconInput} >
							<FontAwesomeIcon icon={faLock} />
						</View>

						<TextInput
							autoCapitalize="none"
							autoCorrect={false}
							placeholder={'Password'}
							style={styles.input}
							onChangeText={() => { }}
						/>
					</View>
					<View style={styles.groupInput}>
						<View style={styles.iconInput} >
							<FontAwesomeIcon icon={faFaceSmile} />
						</View>

						<TextInput
							autoCapitalize="none"
							autoCorrect={false}
							placeholder={'Display name'}
							style={styles.input}
							onChangeText={() => { }}
						/>
					</View>
					<View style={styles.groupInput}>
						<View style={styles.iconInput} >
							<FontAwesomeIcon icon={faEnvelope} />
						</View>

						<TextInput
							autoCapitalize="none"
							autoCorrect={false}
							placeholder={'Email'}
							style={styles.input}
							onChangeText={() => { }}
						/>
					</View>
					<View style={styles.groupInput}>
						<View style={styles.iconInput} >
							<FontAwesomeIcon icon={faMobile} />
						</View>

						<TextInput
							autoCapitalize="none"
							autoCorrect={false}
							placeholder={'Phone'}
							style={styles.input}
							onChangeText={() => { }}
						/>
					</View>
					<View style={styles.groupInput}>
						<View style={styles.iconInput} >
							<FontAwesomeIcon icon={faBuildingColumns} />
						</View>

						<TextInput
							autoCapitalize="none"
							autoCorrect={false}
							placeholder={'Company'}
							style={styles.input}
							onChangeText={() => { }}
						/>
					</View>
					<View style={styles.btnSignUp}>
						<ButtonCustom title="Signup" function={onPressSignUp} color={'#E4E8F0'} textColor={'#000000'} />
					</View>
					<View style={{ height: '100%' }}>
						{
							isLoading &&
							(<View style={styles.containerLoading}>
								<ActivityIndicator style={styles.loading} size="large" color="black" />
							</View>)
						}
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	groupInput: {
		width: '100%',
		flexDirection: 'row'
	},
	iconInput: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		flex: 1,
		width: '100%',
		height: 40,
		borderBottomWidth: 2,
		borderBottomColor: '#E4E8F0',
		margin: 12,
		padding: 10,
	},
	body: {
		height: '100%',
		marginHorizontal: '5%',
	},
	btnSignUp: {
		marginTop: 20,
		width: '100%',
	},
	image:
	{
		width: '100%',
		height: '40%',
		marginVertical: '5%',
	},
	containerLoading: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		bottom: '100%',
	},
	loading: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
export default SignUpView;