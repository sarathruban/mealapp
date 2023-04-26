import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import MealsDetails from './MealsDetails';
function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealitem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        onPress={selectMealItemHandler}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealsDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 8,
  },
  mealitem: {
    margin: 16,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 10,
  },
});
