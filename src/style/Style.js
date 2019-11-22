import { StyleSheet } from "react-native"

export default StyleSheet.create({

    backgroundApp: {
        flex: 1,
        backgroundColor: "#00787E",
    },
    button: {
        alignItems: "center",
        width: 320,
        height: 50,
        marginBottom: 10,
        justifyContent: "center",
        borderRadius: 50,
    },
    buttonPrimary: {
        backgroundColor: "white",
    },
    buttonSecondary: {
        backgroundColor: "#00787E",
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: 1,
    },
    textButton: {
        fontWeight: "bold",
        fontSize: 18,
    },
    textWhite: {
        color: "white",
    },
    title: {
        fontSize: 32,
        marginTop: 30,
    },
    container: {
        marginHorizontal: 20,
    }

})
