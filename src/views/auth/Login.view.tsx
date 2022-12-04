import
React,
{
    FunctionComponent,
    useState
} from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Image,
    Text,
    Button,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Alert
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons'

import { images } from '../../../assets/images/index'
import ButtonCustom from "../../components/button";
import { useLogin } from "../../context/login/login.provider";
interface LoginViewProps {
    navigation:any
}

const LoginView: FunctionComponent<LoginViewProps> = (props) => {
    interface LoginModel {
        username: string
        password: string
    }
    const [loginReqest, setLoginRequest] = useState<LoginModel>({} as LoginModel);
    const [accessToken, setAccessToken] = useState('')
    const { setIsLoggedIn } = useLogin()

    const storeData = async (key: any, value: any) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            console.log(e);
        }
    }


    const getData = async (key: any) => {
        try {
            const value = await AsyncStorage.getItem('access_token')
            if (value !== null) {
                console.log(value);

                setAccessToken(value)
            }
        } catch (e) {
            // error reading value
        }
    }


    const onPressLogin = async () => {
        const response = await fetch('http://localhost:8080/api/v1/auth/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": loginReqest.username,
                "password": loginReqest.password
            })
        })
        if (response.status === 201) {
            response.json().then((data) => {
                const token = data.d.access_token
                storeData('access_token', token)
                setIsLoggedIn(true)
            })
        }else{
            alertLoginFail()
        }
    }

    const onPressSignUp = () =>{
        props.navigation.navigate('SignUp')
    }

    const alertLoginFail = () =>
        Alert.alert(
            "You are not logged in",
            "Wrong username or password",
            [
                { text: "OK", onPress: () => {} }
            ]
        );

    return (
       <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "position" : "height"}
            style={{ backgroundColor: "white", height:'100%'}}
        >

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.body}>
                    <Image
                        style={styles.image}
                        source={images.login_image}
                    />

                    <Text style={styles.headline}>
                        {'Login'}
                    </Text>
                    <Text >
                        {accessToken}
                    </Text>
                    <View style={styles.groupInput}>
                        <View style={styles.iconInput} >
                            <FontAwesomeIcon icon={faAt} />
                        </View>

                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder={'Email/ username'}
                            style={styles.input}
                            onChangeText={text => setLoginRequest({ ...loginReqest, username: text })}
                            value={loginReqest.username} />
                    </View>
                    <View style={styles.groupInput}>
                        <View style={styles.iconInput} >
                            <FontAwesomeIcon icon={faLock} />
                        </View>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            placeholder={'Password'}
                            style={styles.input}
                            onChangeText={text => setLoginRequest({ ...loginReqest, password: text })}
                            value={loginReqest.password} />
                    </View>
                    <View style={styles.btnRight}>
                        <Button title="Forgot password?" onPress={getData} />
                    </View>
                    <View style={styles.btnLogin}>
                        <ButtonCustom title="Login" function={onPressLogin} />
                    </View>
                    <Text style={styles.textSpacing}>
                        {'or'}
                    </Text>
                    <View style={styles.btnSignUp}>
                        <ButtonCustom title="Signup" function={onPressSignUp} color={'#E4E8F0'}  textColor={'#000000'}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    textSpacing: {
        paddingVertical: '3%',
        fontSize: 25,
        alignSelf: 'center'
    },
    copyRightText:{
        marginTop: 7,
        fontSize: 25,
        alignSelf: 'center',
        color:'#0164FF'
    },
    body: {
        marginHorizontal: '5%'
    },
    iconInput: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    groupInput: {
        width: '100%',
        flexDirection: 'row'
    },
    image:
    {
        width: '100%',
        height: '40%',
        marginTop: '20%'
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
    headline: {

        fontSize: 30,
        marginTop: 0,
        width: '100%',
        fontFamily: 'Futura',
    },
    btnRight: {
        alignSelf: 'flex-end'
    },
    btnLogin: {
        width: '100%',
    },
    btnSignUp: {
        width: '100%',
    }
});

export default LoginView;