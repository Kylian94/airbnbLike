import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';

import styles from '../style/Style';
import Header from '../components/Header';
import Input from '../components/Input';

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
        emailValid: 1
    };

    validate = (content) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(content)) {
            console.log('passe a 0')
            this.setState({ emailValid: 0 });
        } else {
            console.log('passe a 1')
            this.setState({ emailValid: 1 });
        }
    }
    validateForm = () => {


        if (this.state.emailValid == 0 && this.state.password) {
            console.log('ok')
            this.setState({ display: 1 })
        }
        if (this.state.emailValid == 1 && this.state.password) {
            console.log('non')
            this.setState({ display: 0 })
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.home}>
                <Text style={[styles.titleSecondary, styles.textWhite]}>Connexion</Text>

                <Input type="email" label="Email"
                    onChangeText={(text) => {
                        this.setState({ email: text })
                        //console.log(this.state.email)
                    }}
                    validate={(email) => {
                        this.validate(email)

                    }}
                    validateForm={() => {
                        this.validateForm()
                        console.log(this.state.emailValid + ' ' + 'display : ' + this.state.display)
                    }}
                />

                <Input type="password" label="Password"
                    onChangeText={(text) => {
                        this.setState({ password: text })

                    }}
                    validateForm={() => {
                        this.validateForm()
                        console.log(this.state.emailValid + ' ' + 'display : ' + this.state.display)
                    }}
                />

                <View opacity={1} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }} >
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('ExploreContainer') }}
                        style={[styles.buttonPrimary, styles.button]} >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                            <Text style={[styles.textButton, { color: '#00787E' }]}>Log in</Text>
                        </View>
                    </TouchableOpacity >
                </View>
                <View opacity={this.state.emailValid}>
                    <Text style={styles.textWhite}>Please enter a valid mail address</Text>
                </View>


            </View >

        );
    }

}
