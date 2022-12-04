import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

interface Props {
    
}
 
const HomeView: FunctionComponent<Props> = () => {
    return ( 
        <View>
            <Text>{'Home Screen'}</Text>
        </View>
     );
}
 
export default HomeView ;