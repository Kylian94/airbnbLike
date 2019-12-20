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
    container: { paddingTop: 22, paddingHorizontal: 20, flex: 1, backgroundColor: "#00787E" }
    ,
    wrapper: {
        display: "flex"
    },
    label: { fontWeight: "700", color: "white" },
    inputFiled: {
        borderBottomWidth: 1,
        borderColor: "white",
        paddingTop: 5,
        paddingBottom: 5
    },
    connexionLabel: {
        fontSize: 24,
        color: "white",
    },
    input: {
        marginVertical: 30
    }

})
