import React from 'react';
import {

    TouchableOpacity,

} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class Like extends React.Component {

    state = {
        iconName: "heart-o",
        color: "white"
    }

    render() {

        return (

            <TouchableOpacity onPress={() => {
                if (this.state.iconName == "heart-o") {
                    this.setState({ iconName: "heart" })
                    this.setState({ color: "#DC143C" })
                } else {
                    this.setState({ iconName: "heart-o" })
                    this.setState({ color: "white" })
                }

            }} style={{ position: "absolute", right: 30, top: 10, zIndex: 9999 }}>
                < Icon name={this.state.iconName} size={20} style={{ color: this.state.color }}></Icon >
            </TouchableOpacity>
        )
    }
}
