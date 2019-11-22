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

import styles from '../style/Style';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';


export default class Login extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (<Header icon="arrow-left" back={() => navigation.goBack()} title="Forget password ?" onPress={() => navigation.navigate('ForgetPassword')} />),


        }
    };



    render() {

        return (
            <View style={[{ paddingTop: 22, flex: 1, backgroundColor: "#00787E" }]}>
                <View style={styles.container}>
                    <Text style={[{ marginTop: 30, fontSize: 24 }, styles.textWhite]}>Connexion</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => onChangeText(text)}
                        value="Mail address"
                    />
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => onChangeText(text)}
                        value="Password"
                    />
                </View>
            </View>
        );
    }

}
