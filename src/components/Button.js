import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from '../style/Style'

export default class Button extends React.Component {

    render() {

        return (
            <TouchableOpacity
                style={[this.props.look == "primary" ? [styles.buttonPrimary, styles.button] : [styles.buttonSecondary, styles.button]]} >
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <View style={{}}>{this.props.icon}</View>
                    <Text style={[{ color: this.props.color }, styles.textButton]} color={this.props.color}>{this.props.content}</Text>
                </View>
            </TouchableOpacity >
        )
    }
}
