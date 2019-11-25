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
import Header from '../components/Header';
import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';



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
                    <Text style={[{ marginTop: 50, fontSize: 24 }, styles.textWhite]}>Connexion</Text>

                    <Sae
                        label={'Email Address'}
                        iconClass={FontAwesomeIcon}
                        iconName={'pencil'}
                        iconColor={'white'}
                        inputPadding={16}
                        labelHeight={24}
                        // active border height
                        borderHeight={2}
                        // TextInput props
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={(text) => { this.setState({ textValue: text }) }}
                        labelStyle={{ color: "white", fontSize: 22 }}
                        style={{ marginVertical: 15 }}
                    />
                    <Sae
                        label={'Password'}
                        iconClass={FontAwesomeIcon}
                        iconName={'lock'}
                        iconColor={'white'}
                        inputPadding={16}
                        labelHeight={24}
                        // active border height
                        borderHeight={2}
                        // TextInput props
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={(text) => { this.setState({ textValue: text }) }}
                        labelStyle={{ color: "white", fontSize: 22 }}
                    />

                </View>
            </View>
        );
    }

}
