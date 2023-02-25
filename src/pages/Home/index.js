import React from 'react';
import {
  ScrollView, StyleSheet, View
} from 'react-native';
import {
  FoodCard1,
  FoodCard2,
  FoodCard3,
  FoodCard4
} from '../../assets';
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <HomeProfile></HomeProfile>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContain}>
            <Gap width={24}></Gap>
            <FoodCard image={FoodCard1}></FoodCard>
            <FoodCard image={FoodCard2}></FoodCard>
            <FoodCard image={FoodCard3}></FoodCard>
            <FoodCard image={FoodCard4}></FoodCard>
          </View>
        </ScrollView>
      </View>

      <View style={styles.tabContainer}>
        <HomeTabSection></HomeTabSection>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  foodCardContain: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
