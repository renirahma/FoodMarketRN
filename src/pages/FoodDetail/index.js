import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FoodCard6, IcBackWhite} from '../../assets';
import {Button, Counter, Rating} from '../../components';
import {Colors, Fonts} from '../../utils';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground style={styles.cover} source={FoodCard6}>
        <TouchableOpacity style={styles.back}>
          <IcBackWhite></IcBackWhite>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Cherry Healthy</Text>
              <Rating></Rating>
            </View>
            <Counter></Counter>
          </View>
          <Text style={styles.desc}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Text style={styles.priceTotal}>IDR 12.289.000</Text>
          </View>
          <View style={styles.button}>
            <Button text={'Order Now'} onPress={()=> navigation.navigate("OrderSummary")}></Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {
    height: 330,
    paddingLeft: 22,
    paddingTop: 26,
  },
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: Colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  desc: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.grey,
    marginBottom: 16,
  },
  label: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.black,
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical:16,
    alignItems:'center',
    // justifyContent:'space-between',
  },
  priceContainer:{
    flex:1
  },
  button:{
    width:163
  },
  labelTotal:{
    fontSize:13,
    fontFamily:Fonts.regular,
    color:Colors.black
  },
  priceTotal:{
    fontSize:18,
    fontFamily:Fonts.regular,
    color:Colors.black
  },
});
