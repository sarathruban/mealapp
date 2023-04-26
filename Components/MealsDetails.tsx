import {View, Text, StyleSheet} from "react-native";
function MealsDetails ({duration, complexity, affordability }){
    <View style={styles.details} >
            <Text style={styles.detailitem}> {duration}mins</Text>
            <Text style={styles.detailitem}> {complexity.toUpperCase()} </Text>
            <Text style={styles.detailitem}> {affordability.toUpperCase()} </Text>
        </View>
}
export default MealsDetails;
const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        padding: 8,
        justifyContent: "center",
        alignItems: 'center'
     },
     detailitem: {
        marginHorizontal: 14,
        fontSize: 14
     }
})