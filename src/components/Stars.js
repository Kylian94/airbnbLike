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
        const { color } = "green"
        var nbStars = [1, 2, 3, 4, 5]
        return (

            <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                {
                    nbStars.map(function (value, index) {
                        //console.log(nbStars + ' ' + text + ' ' + index)
                        return (<View style={{ height: 12 }}>
                            <Icon
                                key={"star" + index}
                                name="star"
                                size={size}
                                color={text > index ? colors.green02 : colors.gray03}
                            //style={styles.star}
                            />
                        </View>)
                    })
                }
                <Text style={{ marginLeft: 5 }}>{this.props.text}</Text>
            </View>
        )



    }
}
