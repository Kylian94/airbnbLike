import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Modal,
    Alert,
    TouchableHighlight,
    TouchableOpacity

} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styles from '../style/Style';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class LoggedOut extends React.Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor="black" />
                <View style={styles.backgroundApp}>
                    <View style={styles.container}>
                        <Text style={{ textAlign: "right", marginTop: 15, color: "white" }}>Log in</Text>
                        <Image
                            style={{ width: 50, height: 50, marginTop: 120 }}
                            source={require('../img/logo.png')}
                        />
                        <Text style={[styles.textWhite, styles.title,]}>Welcome to Airbnb.</Text>
                        <View style={{ alignItems: "center", marginTop: 30, }}>

                            <Button icon={<Icon name="google" size={20} style={{ color: '#00787E', marginRight: 10, position: "absolute", right: 20, top: -10 }}></Icon>} color="#00787E" look="primary" content="Continue with Google" />
                            <Button color="white" look="secondary" content="Create account" />
                        </View>
                        <View style={[{ marginTop: 22 }]}>
                            <Modal
                                animationType="slide"
                                transparent={false}
                                visible={this.state.modalVisible}
                                onRequestClose={() => {
                                    Alert.alert('Modal has been closed.');
                                }}>
                                <View style={[styles.backgroundApp, { alignItems: "center" }]}>
                                    <View style={[{ marginTop: 20 }, styles.container]}>
                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(!this.state.modalVisible);
                                            }}>
                                            <Icon name="times" size={25} style={{ color: "white" }}></Icon>
                                        </TouchableHighlight>
                                        <View style={{ marginTop: 200, }}>
                                            <Button icon={<Icon name="google" size={20} style={{ color: '#00787E', marginRight: 10, position: "absolute", right: 20, top: -10 }}></Icon>} color="#00787E" look="primary" content="Continue with Google" />
                                            <Button icon={<Icon name="facebook" size={20} style={{ color: '#00787E', marginRight: 10, position: "absolute", right: 20, top: -10 }}></Icon>} color="#00787E" look="primary" content="Continue with Facebook" />
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
                        <Text style={[styles.textWhite, { marginTop: 20, opacity: 0.7 }]}>We use cookies to personalize our content and advertising, measure the effectiveness of our advertising and provide a safer experience.</Text>
                    </View>

                </View>
            </>
        )
    }
}