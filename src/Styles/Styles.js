import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    header: {
        backgroundColor: "rgba(247,97,100,1)",
        justifyContent: "center"
    },
    headerText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign:"center",
        padding:20
    },
    loading: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        padding:20,
        margin:10,
        backgroundColor:"white",
        borderRadius:10,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    cardText: {
        fontSize: 14,
        fontWeight: "bold",
    },
});