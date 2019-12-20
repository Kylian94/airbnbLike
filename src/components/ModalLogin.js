import React from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity

} from 'react-native';

import styles from '../style/Style';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ModalLogin extends React.Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View style={[{ marginTop: 22 }]}>
                <Modal animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <View style={[styles.backgroundApp, { alignItems: "center" }]}>
                        <View style={[{ marginTop: 20 }, styles.container]}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Icon name="times" size={25} style={{ color: "white" }}></Icon>
                            </TouchableOpacity>
                            <View style={{ marginTop: 200, }}>
                                <Button icon={<Icon name="google" size={20} style={{ color: '#00787E', marginRight: 10, position: "absolute", right: 80, top: -10 }}></Icon>} color="#00787E" look="primary" content="Google" />
                                <Button icon={<Icon name="facebook" size={20} style={{ color: '#00787E', marginRight: 10, position: "absolute", right: 75, top: -10 }}></Icon>} color="#00787E" look="primary" content="Facebook" />
                                <Button color="white" look="secondary" content="Create account" />
                            </View>

                        </View>
                    </View>
                </Modal>
                <TouchableOpacity
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text style={{ color: "white", fontSize: 18, }}>More option</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
