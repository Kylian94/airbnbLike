import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Modal,
    TouchableHighlight,
    TouchableOpacity,
    TextInput

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
