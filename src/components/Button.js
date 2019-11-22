import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import styles from '../style/Style'



export default class Button extends React.Component {


    render() {
        return (
            <TouchableOpacity style={this.props.look == "primary" ? [styles.buttonPrimary, styles.button] : [styles.buttonSecondary, styles.button]}>
                <Text style={[{ color: this.props.color }, styles.textButton]} color={this.props.color}>{this.props.content}</Text>
            </TouchableOpacity>
        )

    }

}
