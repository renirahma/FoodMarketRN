import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts } from '../../../utils';
import Rating from '../Rating';

const FoodCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}></Image>
      <View style={styles.content}>
        <Text style={styles.text}>Cherry Healty</Text>
        <Rating></Rating>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    width: 200,
    overflow: 'hidden',
    marginRight:24,
  },
  image:{
    width:200,
    height:140,
    resizeMode:'cover'
  },
  content:{
    padding:12,
  },
  text: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },

});
