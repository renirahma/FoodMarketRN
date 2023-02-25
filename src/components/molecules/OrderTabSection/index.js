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

const renderTabBar = (props) => (
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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal:24}}>
      <ScrollView>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard1}
          type={"in-progress"}
          items={3}
          price="39.000"
          name={"Sop Bumil"}
          ></ItemListFood>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard2}
          type={"in-progress"}
          items={3}
          price="39.000"
          name={"Sop Bumil"}
          ></ItemListFood>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard3}
          type={"in-progress"}
          items={3}
          price="39.000"
          name={"Sop Bumil"}
          ></ItemListFood>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard4}
          type={"in-progress"}
          items={3}
          price="39.000"
          name={"Sop Bumil"}
          ></ItemListFood>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard2}
          type={"in-progress"}
          items={3}
          price="39.000"
          name={"Sop Bumil"}
          ></ItemListFood>
      </ScrollView>
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal:24}}>
      <ScrollView>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard4}
          type={"past-order"}
          items={3}
          price="39.000"
          name={"Sop Bumil"}
          date={"Jun 12, 14:00"}
          ></ItemListFood>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard3}
          type={"past-order"}
          items={3}
          price="39.000"
          name={"Sop Bumil"}
          date={"Jun 12, 14:00"}
          status="Canceled"
          ></ItemListFood>
        <ItemListFood
          rating={4}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodCard1}
          type={"past-order"}
          items={3}
          price="39.000"
          name={"Sop Bumil"}
          date={"Jun 12, 14:00"}
          status="Canceled"
          ></ItemListFood>
      </ScrollView>
    </View>
  );
};


const renderScene = SceneMap({
  1: InProgress,
  2: PastOrders,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Order'},
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

export default OrderTabSection;

const styles = StyleSheet.create({});
