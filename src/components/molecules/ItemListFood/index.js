import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../../../utils';
import Rating from '../Rating';

const ItemListFood = ({
  image,
  onPress,
  items,
  rating,
  price,
  type,
  name,
  date,
  status
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating}></Rating>
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <View style={styles.content}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>
              {items} items • IDR {price}
            </Text>
          </View>
        );
      case 'past-order':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.price}>
                {items} items • IDR {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.price}>IDR 289.000</Text>
            </View>
            <Rating></Rating>
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.img}></Image>
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    // paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  name: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.black,
  },
  price: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.grey,
  },
  items: {
    fontSize: 13,
    fontFamily: Fonts.regular,
    color: Colors.grey,
  },
  date:{
    fontSize:10,
    fontFamily: Fonts.regular,
    color:Colors.grey,
  },
  status: {
    fontSize:10,
    fontFamily: Fonts.regular,
    color:Colors.red
  },
});
