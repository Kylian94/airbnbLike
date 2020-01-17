import React from 'react';
import {
    Image,
    View,
} from 'react-native';

export default class Categories extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", marginTop: 15 }}>
                {

                    this.props.categories.map(function (category) {
                        return <Image
                            style={{ width: 100, height: 100 }}
                            source={category.photo}
                            key={category.id}
                        />;
                    })
                }
            </View>
        )
    }
}