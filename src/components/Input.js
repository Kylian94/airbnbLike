import React from 'react';
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Alert,

} from 'react-native';

import Button from '../components/Button'
import styles from '../style/Style'

export default class Input extends React.Component {

    state = {
        content: null,
        passwordVisible: true,
    };

    setPasswordVisible(visible) {
        this.setState({ passwordVisible: visible });
    }

    render() {

        return (

            <View style={styles.input}>
                <View style={this.props.type == "password" ? { flexDirection: "row", justifyContent: "space-between" } : false}>
                    <Text style={[styles.textWhite, styles.label]}>
                        {this.props.label}
                    </Text>
                    {
                        this.props.type == "password" &&
                        <TouchableOpacity onPress={() => this.setPasswordVisible(!this.state.passwordVisible)}>
                            <Text style={styles.textWhite}>Show</Text>
                        </TouchableOpacity>
                    }

                </View>

                <TextInput
                    content={this.state.content}
                    secureTextEntry={this.props.type == "password" ? this.state.passwordVisible : false}

                    onChangeText={(text) => {
                        this.setState({ content: text })
                        this.props.onChangeText(text)
                    }}
                    onBlur={() => {
                        if (this.props.type == "email") {
                            //this.props.set(this.state.content)
                            this.props.validate(this.state.content)
                            //this.props.validateForm()
                        }

                        this.props.validateForm()
                    }}
                    autoCorrect={false}
                    labelStyle={{ color: "white", fontSize: 22 }}
                    style={[styles.textWhite, styles.inputFiled]}
                    value={
                        this.props.type == "email" ? this.state.content : this.state.content}

                />


            </View>
        )
    }
}
