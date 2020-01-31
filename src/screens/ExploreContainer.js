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

//import { experiences } from "../data/listing"
//import categories from "../data/categories";
import categories from "../data/categories.json"
import experiences from "../data/experiences.json"

export default class ExploreContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            experiences: []
        }
    }
    componentDidMount() {
        return fetch('https://api.myjson.com/bins/61fqq') // requête vers l'API
            .then((response) => response.json())
            .then((jsonData) => {
                this.setState({ experiences: jsonData.experiences.listings })
                this.setState({ categories: jsonData.categories })

            }).catch((error) => {
                console.error(error);
            });
    }
    render() {
        // récupérer les variables dans le state
        console.log(this.state.experiences)
        return (
            <ScrollView style={[styles.container]}>

                <Text style={[styles.titleSecondary, { marginTop: 15 }]}>Explore airbnb</Text>
                <Categories categories={this.state.categories} />

                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
                    <Text style={[styles.titleLight, {}]}>Experiences</Text>
                    <TouchableOpacity>
                        <Text>See all ></Text>
                    </TouchableOpacity>
                </View>
                <Experiences experiences={this.state.experiences} />

            </ScrollView>
        )
    }
    // render() {
    //     return (
    //         <ScrollView style={[styles.container]}>

    //             <Text style={[styles.titleSecondary, { marginTop: 15 }]}>Explore airbnb</Text>
    //             <Categories categories={categories} />

    //             <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
    //                 <Text style={[styles.titleLight, {}]}>Experiences</Text>
    //                 <TouchableOpacity>
    //                     <Text>See all ></Text>
    //                 </TouchableOpacity>
    //             </View>
    //             <Experiences experiences={experiences} />

    //         </ScrollView>
    //     )
    // }
}
