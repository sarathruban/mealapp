import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {MEALS} from '../Data/dummy-data';
import MealsDetails from '../Components/MealsDetails';
import Subtitle from '../Components/Subtitle';
import List from '../Components/List';
function MealDetailScreen({route}) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealsDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style ={styles.listOuterContainer}>
        <View style={styles.listContainer}>
      <Subtitle>Ingredients</Subtitle>
      <List data = {selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data = {selectedMeal.steps} />
      </View>
      </View>
      

    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  
  rootContainer: {
     marginBottom: 32
      
    },
  
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listContainer:{
    width: '80%'
  },
  listOuterContainer:{
    alignItems: 'center'
  }
});
