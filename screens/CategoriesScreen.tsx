import {FlatList} from 'react-native';
import {CATEGORIES} from '../Data/dummy-data';
import CategoryGridTile from '../Components/CategoryGridtile';

function CategoriesScreen({navigation}) {
  function renderCategoriesItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryID : itemData.item.id
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
        navigation={navigation}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoriesItem}
      numColumns={2}
    />
  );
}
export default CategoriesScreen;
