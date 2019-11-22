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
    TouchableOpacity

} from 'react-native';

import {
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/FontAwesome';



export default class Header extends React.Component {

    render() {

        return (
            <View style={{ backgroundColor: '#00787E', flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingTop: 15, paddingHorizontal: 20, }}>
                <TouchableOpacity onPress={() => this.props.back()}>
                    <Icon name={this.props.icon} size={20} style={{ color: "white" }} ></Icon>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <Text style={{ color: "white" }}>{this.props.title}</Text>
                </TouchableOpacity>


            </View>
        );
    }

}
