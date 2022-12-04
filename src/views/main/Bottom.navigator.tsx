import React, { FunctionComponent } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import HomeView from "./Home.view";
import { StyleSheet, Text } from "react-native";
import ProfileView from "./Profile.view";
interface BottomNavigatorProps {

}
const Tab = createBottomTabNavigator();
const primaryColor = '#0164FF'

const BottomNavigator: FunctionComponent<BottomNavigatorProps> = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen
                name="Home"
                component={HomeView}
                options={({route})=>({
                    tabBarIcon: ({focused}) => {
                        return (<FontAwesomeIcon color={focused ? primaryColor : 'grey'}  size={28} icon={faHome} />)
                    }, 
                    tabBarLabel: ({ focused }) => {
                        return <Text style={styles.tabBarIcon}>{focused ?  route.name: ""}</Text>
                      }   
                })} />
                <Tab.Screen
                name="Profile"
                component={ProfileView}
                options={({route})=>({
                    tabBarIcon: ({focused}) => {
                        return (<FontAwesomeIcon color={focused ? primaryColor : 'grey'}  size={28} icon={faUser} />)
                    }, 
                    tabBarLabel: ({ focused }) => {
                        return <Text style={styles.tabBarIcon}>{focused ?  route.name: ""}</Text>
                      }   
                })} />
     
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarIcon: {

    },
    tabBarContainer: {


    }
})
export default BottomNavigator;