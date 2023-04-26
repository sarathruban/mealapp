import {View, Text, Pressable, StyleSheet} from 'react-native';
function CategoryGridTile({title, color, onPress, navigation}) {
  
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable
        style={styles.button}
        android_ripple={{color: 'gray'}}
        onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 6,
    shadowColor: 'black',
    overflow: 'hidden',
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
