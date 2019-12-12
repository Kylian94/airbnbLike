
import React from 'react';

// (-1) faire le ménage, beaucoup de lib non utilisées (lisibilités)
import {
    View,
    Text,

} from 'react-native';

import Header from '../components/Header';


export default class Login extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (<Header back={() => navigation.goBack()} icon="arrow-left" title="" onPress={() => navigation.navigate('Login')} />),


        }
    };



    render() {
        return (
            <View style={[{ paddingTop: 22, flex: 1, backgroundColor: "#00787E" }]}>
                <Text>Test password page</Text>
            </View>
        );
    }

}
