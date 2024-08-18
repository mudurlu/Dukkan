import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor:"white"
    },
    body_container:{
        padding: 10,
        paddingVertical: 20
    },
    image:{
        width:Dimensions.get("window").width ,
        height:Dimensions.get("window").height /3,
        resizeMode: "contain"
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        color: "black",
        paddingVertical: 10
    },
    desc: {
        fontStyle: "italic",
        color: "grey"
    },
    priceAndCountContainer: {
        
        width: "100%",
        flexDirection: "row-reverse",
        justifyContent: "space-between"
    },
    price: {
        fontWeight: "bold",
        fontSize: 22,
        marginVertical:10,
        color: "black"
    },
    count: {
        fontStyle: "italic",
        fontSize: 12,
        marginVertical:10,
        color: "darkgrey",
        paddingVertical:15
    },
    button: {
        marginVertical:30,
        padding: 10,
        backgroundColor: "cornflowerblue",
        width: 100,
        borderRadius:10,
        alignItems:"center",
        alignSelf: "center"
    },
    buttonText: {
        fontSize:18,
        fontWeight: "bold",
        color: "white"
    }
})