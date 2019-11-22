import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
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


export default class LoggedOut extends React.Component {
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
                        <View style={{ alignItems: "center", marginTop: 50, }}>
                            <Button color="#00787E" look="primary" content="Continue with Google" />
                            <Button color="white" look="secondary" content="Create account" />
                        </View>
                        <Text style={{ marginTop: 35, color: "white", fontSize: 16, }}>More option</Text>
                        <Text style={[styles.textWhite, { marginTop: 160, opacity: 0.7 }]}>Nous utilisons des cookies pour personnaliser notre contenu et nos publicités, mesurer l'efficacité de nos publicités et offrir une expérience plus sûre.</Text>
                    </View>

                </View>
            </>
        )
    }
}