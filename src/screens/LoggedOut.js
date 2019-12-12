import React from 'react';
// (-1) faire le ménage, beaucoup de lib non utilisées (lisibilités)
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Modal,
    TouchableHighlight,
    TouchableOpacity

} from 'react-native';


// (-1) faire le ménage, beaucoup de lib non utilisées (lisibilités)
import {
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styles from '../style/Style';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalLogin from '../components/ModalLogin'
import Header from '../components/Header'


export default class LoggedOut extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: (<Header title="Log in" back={() => navigation.goBack()} onPress={() => navigation.navigate('Login')} />),

        }
    };

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

                        <Image
                            // (0) Pas très grave pour l'instant mais prendre l'habitude de mettre les styles dans un fichier à part
                            style={{ width: 50, height: 50, marginTop: 120 }}
                            source={require('../img/logo.png')}
                        />
                        <Text style={[styles.textWhite, styles.title,]}>Welcome to Airbnb.</Text>
                        <View style={{ alignItems: "center", marginTop: 30, }}>

                            <Button icon={<Icon name="google" size={20} style={{ color: '#00787E', marginRight: 10, position: "absolute", right: 20, top: -10 }}></Icon>} color="#00787E" look="primary" content="Continue with Google" />
                            <Button color="white" look="secondary" content="Create account" />
                        </View>
                        <ModalLogin />
                        <Text style={[styles.textWhite, { marginTop: 20, opacity: 0.7 }]}>We use cookies to personalize our content and advertising, measure the effectiveness of our advertising and provide a safer experience.</Text>
                    </View>
                </View>


            </>
        )
    }
}