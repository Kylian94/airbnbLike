import React from 'react';
import {
    Image,
    View,
    ScrollView,
    Text,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';




import styles from '../style/Style';
import Stars from './Stars';

export default class Experiences extends React.Component {

    render() {

        return (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", marginTop: 15 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        this.props.experiences.map(function (experience, index) {
                            return (
                                <View>
                                    <Image
                                        icon={< Icon name="heart-o" size={20} style={{ color: '#fffff', position: "absolute", right: 20, top: -10, zIndex: 9999 }}></Icon >}
                                        style={[{ width: 150, height: 100, marginRight: 20, position: "relative" }, styles.card]}
                                        source={experience.photo}
                                    />
                                    <Text style={[styles.cardTitle, { color: experience.color }]}>{experience.type}</Text>
                                    <Text ellipsizeMode='tail' numberOfLines={2} style={[styles.cardDesc, { width: 150 }]}>{experience.title}</Text>
                                    <Text style={[styles.cardPrice]}>{experience.price}$ {experience.priceType}</Text>
                                    <Stars text={experience.stars} />
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}
