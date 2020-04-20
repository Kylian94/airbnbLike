import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    AsyncStorage
} from 'react-native';

import styles from '../style/Style';

export default class ProfileContainer extends React.Component {


    logout = () => {

        return AsyncStorage
            .clear()
            .then(() => {
                this.props.navigation.navigate('Login')
            })

    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ marginTop: 15 }}>PROFILE</Text>
                <TouchableOpacity
                    onPress={this.logout}
                    style={[styles.buttonSecondary, styles.button, { marginTop: 15 }]} >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                        <Text style={[styles.textButton, { color: '#FFFFFF' }]}>Log out</Text>
                    </View>
                </TouchableOpacity >
            </View>

        )
    }
}