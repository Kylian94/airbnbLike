import React from 'react';
import {
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import styles from '../style/Style';
import Categories from '../components/Categories';
import Experiences from "../components/Experiences"

// import categories from "../data/categories.json"
// import experiences from "../data/experiences.json"

import { connect } from 'react-redux';
import { Actions } from '../actions';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class ExploreContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userToken: '',
        };
    }
    componentDidMount() {


        AsyncStorage.getItem('userToken').then((userToken) => {
            if (userToken) {
                this.setState({ userToken: userToken });

            }
        });

        return fetch('https://my-json-server.typicode.com/amallo/bbnb-sample/blob/master/experiences') // requête vers l'API
            .then((response) => response.json())
            .then((results) => {
                // this.setState({ experiences: jsonData.experiences.listings })
                // this.setState({ categories: jsonData.categories })
                // this.setState({ homes: jsonData.homes.listings })
                // this.setState({ popular: jsonData.popular.listings })
                this.props.setListings(results)
                this.props.setAsyncStorage(this.state.userToken)

            }).catch((error) => {
                console.error(error);
            });



    }
    render() {

        return (
            <ScrollView style={[styles.container]}>

                <Text style={[styles.titleSecondary, { marginTop: 15 }]}>Explore airbnb</Text>
                {/* <Categories categories={this.props.categories} /> */}

                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
                    <Text style={[styles.titleLight, {}]}>Experiences</Text>
                    <TouchableOpacity>
                        <Text style={{ paddingRight: 20 }}>See all ></Text>
                    </TouchableOpacity>
                </View>
                <Experiences experiences={this.props.experiences} />

                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
                    <Text style={[styles.titleLight, {}]}>Homes</Text>
                    <TouchableOpacity>
                        <Text style={{ paddingRight: 20 }}>See all ></Text>
                    </TouchableOpacity>
                </View>
                {/* <Experiences experiences={this.props.homes} /> */}

                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
                    <Text style={[styles.titleLight, { paddingRight: 20 }]}>Popular</Text>
                    <TouchableOpacity>
                        <Text style={{ paddingRight: 20 }}>See all ></Text>
                    </TouchableOpacity>
                </View>
                {/* <Experiences experiences={this.props.popular} /> */}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    //categories: state.listings.categories,
    experiences: state.listings.experiences,
    //homes: state.listings.homes,
    //popular: state.listings.popular,
})

const mapDispatchToProps = (dispatch) => ({
    setListings: (results) => dispatch(Actions.setListings(results)),
    setAsyncStorage: (userToken) => dispatch(Actions.setAsyncStorage(userToken))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExploreContainer)
