import React from 'react';
import {
    View,
    Text,
    TextInput,
    Alert,
    TouchableOpacity,
} from 'react-native';

import styles from '../style/Style';
import Header from '../components/Header';
import Button from '../components/Button';

//import { Sae } from 'react-native-textinput-effects';
//import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default class Login extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (<Header icon="arrow-left" back={() => navigation.goBack()} title="Forget password ?" onPress={() => navigation.navigate('ForgetPassword')} />),
        }
    };

    state = {
        email: null,
        password: null,
        display: 0,
        passwordVisible: true
    };


    setPasswordVisible(visible) {
        this.setState({ passwordVisible: visible });
    }

    validate = (email) => {

        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            this.setState({ email: email })
            Alert.alert(
                'Email error',
                'Your email is not valid \n Example : johnDoe@email.com',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
            return false;
        }
        else {
            this.setState({ email: email })
        }
    }
    validateForm = (email, password) => {
        if (email && password) {
            this.setState({ display: 1 })
        } else {
            this.setState({ display: 0 })
        }
    }

    setPassword = (password) => {
        this.setState({ password })
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.connexionLabel}>Connexion</Text>

                <View style={styles.input}>
                    <Text style={[styles.textWhite, styles.label]}>
                        Email Address
                    </Text>
                    <TextInput
                        onChangeText={(text) => { this.setState({ email: text }) }}
                        onBlur={() => {
                            this.validate(this.state.email)
                            this.validateForm(this.state.email, this.state.password)
                        }}
                        labelStyle={{ color: "white", fontSize: 22 }}
                        style={[styles.textWhite, styles.inputFiled]}
                        value={this.state.email}
                    />
                </View>

                <View style={styles.input}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={[styles.textWhite, styles.label]}>
                            Password
                        </Text>
                        <TouchableOpacity onPress={() => this.setPasswordVisible(!this.state.passwordVisible)}>
                            <Text style={styles.textWhite}>Show</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        onBlur={() => {
                            this.validateForm(this.state.email, this.state.password)
                        }}
                        autoCorrect={false}
                        onChangeText={this.setPassword}
                        labelStyle={{ color: "white", fontSize: 22 }}
                        secureTextEntry={this.state.passwordVisible}
                        style={styles.textWhite, styles.inputFiled}
                        value={this.state.password}
                    />
                </View>


                <View opacity={this.state.display}>
                    <Button color="#00787E" look="primary" content="Log in" />
                </View>

            </View >
        );
    }

}
