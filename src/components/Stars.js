import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class Stars extends React.Component {

    render() {
        return (
            <View>
                <Text>Nb stars : {this.props.text}</Text>
            </View>
        )



    }
}
