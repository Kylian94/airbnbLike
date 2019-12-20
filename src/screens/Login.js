import React from 'react';
import {
    View,
    Text,
    TextInput,
    Alert

} from 'react-native';

import styles from '../style/Style';
import Header from '../components/Header';
//import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';



export default class Login extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (<Header icon="arrow-left" back={() => navigation.goBack()} title="Forget password ?" onPress={() => navigation.navigate('ForgetPassword')} />),
        }
    };

    state = {
        email: "",
        password: ""
    };

    validate = (email) => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            this.setState({ email: email })
            Alert.alert(
                'Email error',
                'Your email is not valid',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: true },
            );
            return false;
        }
        else {
            this.setState({ email: email })
        }
    }

    render() {

        return (
            <View style={[{ paddingTop: 22, flex: 1, backgroundColor: "#00787E" }]}>
                <View style={styles.container}>
                    <Text style={[{ marginTop: 50, fontSize: 24 }, styles.textWhite]}>Connexion</Text>
                    <Text style={[{ marginTop: 20 }, styles.textWhite, styles.label]}>
                        Email Address
                    </Text>
                    <TextInput
                        onChangeText={(text) => { this.setState({ email: text }) }}
                        onBlur={() => {
                            this.validate(this.state.email)
                        }}
                        labelStyle={{ color: "white", fontSize: 22 }}
                        style={[{ marginBottom: 15 }, styles.textWhite, styles.inputFiled]}
                        value={this.state.email}
                    />

                    <Text style={[{ marginTop: 20 }, styles.textWhite, styles.label]}>
                        Password
                    </Text>
                    <TextInput
                        autoCorrect={false}
                        onChangeText={(text) => { this.setState({ password: text }) }}
                        labelStyle={{ color: "white", fontSize: 22 }}
                        secureTextEntry={true}
                        style={[styles.textWhite, styles.inputFiled]}
                        value={this.state.password}
                    />
                </View>
            </View>
        );
    }

}
