import { StyleSheet } from "react-native"

export default StyleSheet.create({

    backgroundApp: {
        flex: 1,
        backgroundColor: "#00787E",
    },
    button: {

        width: 320,
        height: 45,
        marginBottom: 10,
        borderRadius: 50,
    },
    buttonPrimary: {

        backgroundColor: "white",
        justifyContent: "space-between"
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
    },
    wrapper: {
        display: "flex"
    },
    label: { fontWeight: "700", color: "white" },
    inputFiled: {
        borderBottomWidth: 1,
        borderColor: "white",
        paddingTop: 5,
        paddingBottom: 5
    }

})
