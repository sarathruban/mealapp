import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useLayoutEffect} from 'react';
import {MEALS, CATEGORIES} from '../Data/dummy-data';
import MealItem from '../Components/MealItem';
function MealsOverviewScreen({route, navigation}) {
  const catId = route.params.categoryID;
  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
