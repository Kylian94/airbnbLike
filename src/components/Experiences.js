import React from 'react';
import {

    View,
    ScrollView,

} from 'react-native';

import Card from './Card';
import photos from "../data/photos/index"
import colors from "../style/colors"

export default class Experiences extends React.Component {

    render() {

        return (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", marginTop: 15 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        this.props.experiences.map(function (experience, index) {

                            return (
                                <Card
                                    key={"experience" + index}
                                    type={experience.type}
                                    title={experience.title}
                                    photo={photos[experience.photo]}
                                    price={experience.price}
                                    priceType={experience.priceType}
                                    stars={experience.stars}
                                    color={colors[experience.color]}
                                />
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}
