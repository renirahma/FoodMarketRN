import React from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ScrollView,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import {Colors, Fonts} from '../../../utils';
import ItemListFood from '../ItemListFood';
import {FoodCard1, FoodCard2, FoodCard3, FoodCard4} from '../../../assets';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: Colors.black,
      height: 3,
    }}
    style={{
      backgroundColor: Colors.white,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: Fonts.medium,
          color: focused ? Colors.black : Colors.grey,
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ScrollView>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard1}
          type={'product'}
          price="39.000"
          name={'Sop Bumil'}></ItemListFood>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard2}
          type={'product'}
          price="39.000"
          name={'Sop Bumil'}></ItemListFood>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard3}
          type={'product'}
          price="39.000"
          name={'Sop Bumil'}></ItemListFood>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard4}
          type={'product'}
          price="39.000"
          name={'Sop Bumil'}></ItemListFood>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard2}
          type={'product'}
          price="39.000"
          name={'Sop Bumil'}></ItemListFood>
      </ScrollView>
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ScrollView>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard4}
          type={"product"}
          price="39.000"
          name={"Sop Bumil"}
          ></ItemListFood>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard3}
          type={"product"}
          price="39.000"
          name={"Sop Bumil"}
          ></ItemListFood>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard1}
          type={"product"}
          price="39.000"
          name={"Sop Bumil"}
          ></ItemListFood>
      </ScrollView>
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ScrollView>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard4}
          type={"product"}
          price="39.000"
          name={"Sop Bumil"}
          ></ItemListFood>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard3}
          type={"product"}
          price="39.000"
          name={"Sop Bumil"}
          ></ItemListFood>
      </ScrollView>
    </View>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
      style={{backgroundColor: Colors.white}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
