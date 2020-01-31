import React from 'react';
import {
    View,
    Text,
    Image

} from 'react-native';

import Stars from './Stars';
import Like from './Like';
import styles from '../style/Style';

export default class Card extends React.Component {


    render() {

        return (

            <View>

                <Image
                    style={[{ width: 150, height: 100, marginRight: 20, position: "relative", zIndex: 1 }, styles.card]}
                    source={this.props.photo}
                />
                <Like></Like>

                <Text style={[styles.cardTitle, { color: this.props.color }]}>{this.props.type}</Text>
                <Text ellipsizeMode='tail' numberOfLines={2} style={[styles.cardDesc, { width: 150 }]}>{this.props.title}</Text>
                <Text style={[styles.cardPrice]}>{this.props.price}$ {this.props.priceType}</Text>
                <Stars text={this.props.stars} color={this.props.color} />
            </View>

        )



    }
}
