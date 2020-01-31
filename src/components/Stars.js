import React from 'react';
import {
    View,
    Text,

} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../style/colors';

export default class Stars extends React.Component {

    render() {

        const { text } = this.props
        const { size } = 10
        var nbStars = [1, 2, 3, 4, 5]

        this.state = {
            visible: 1
        }

        return (

            <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }} opacity={this.props.text} >
                {
                    nbStars.map(function (value, index) {

                        return (<View style={{ height: 12 }} key={"star" + index}>
                            <Icon

                                name="star"
                                size={size}
                                color={text > index ? colors.green02 : colors.gray03}
                            />
                        </View>)
                    })
                }
                <Text style={{ marginLeft: 5 }}>{this.props.text}</Text>
            </View>
        )
    }
}
