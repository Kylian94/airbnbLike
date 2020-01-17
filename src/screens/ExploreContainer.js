import React from 'react';
import {
    Text,
    ScrollView,
    View,
    TouchableOpacity
} from 'react-native';

import styles from '../style/Style';
import Categories from '../components/Categories';
import Experiences from "../components/Experiences"

import { experiences } from "../data/listing"
import categories from "../data/categories";

export default class ExploreContainer extends React.Component {
    render() {
        return (
            <ScrollView style={[styles.container]}>

                <Text style={[styles.titleSecondary, { marginTop: 15 }]}>Explore airbnb</Text>
                <Categories categories={categories} />

                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
                    <Text style={[styles.titleLight, {}]}>Experiences</Text>
                    <TouchableOpacity>
                        <Text>See all ></Text>
                    </TouchableOpacity>
                </View>
                <Experiences experiences={experiences} />

            </ScrollView>
        )
    }
}
