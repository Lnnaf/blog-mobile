import React, { FunctionComponent } from "react";
import { TouchableOpacity, Text, ViewStyle, StyleSheet } from "react-native";
import { ButtonTypes } from "../../constants/button/index"

interface ButtonCustomProps {
    title: string
    function: any
    color?: string
    textColor?: string
}

const ButtonCustom: FunctionComponent<ButtonCustomProps> = (props) => {

    return (
        <TouchableOpacity style={{
            backgroundColor: props.color || '#0164FF',
            borderRadius: 10,
            paddingVertical: 8,
            height:45
        }} 
        onPress={props.function}>
            <Text style={{
                fontFamily: 'Futura',
                alignItems: 'center',
                justifyContent:'center',
                textAlign:'center',
                fontSize: 20,
                color: props.textColor || 'white',
                alignSelf: "center"
            }}>{props.title}</Text>
        </TouchableOpacity>
    );
}

class ex {
    a: any
}



export default ButtonCustom;