import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        borderColor: "#bdbdbd",
        backgroundColor: "#eeeeee",
        borderWidth: 2,
        margin: 10,
        borderRadius: 10,
        flexDirection: "row"
    },
    image: {
        width:100,
        minHeight: 100,
        margin: 2,
        resizeMode: "contain"
    },
    body_container:{
        flex: 1,
        padding: 5,
        justifyContent: "space-between"
    },
    title: {
        fontWeight : "bold",
        fontSize : 16
    },
    price: {
        textAlign: "right",
        fontSize: 14,
        fontStyle: "italic"
    }

})