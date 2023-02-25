import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, ItemListFood, ItemValue} from '../../components';
import {FoodCard1} from '../../assets';
import {Colors, Fonts} from '../../utils';

const OrderSummary = ({navigation}) => {
  return (
    <View>
      <Header
        title={'Payment'}
        subTitle={'You deserve better meal'}
        onBack={() => {}}></Header>

      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          image={FoodCard1}
          type={'order-summary'}
          items={3}
          price="39.000"
          name={'Sop Bumil'}></ItemListFood>
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue
          label={'Cherry Healthy'}
          value={'IDR 18.390.000'}></ItemValue>
        <ItemValue
          label={'Cherry Healthy'}
          value={'IDR 18.390.000'}></ItemValue>
        <ItemValue
          label={'Cherry Healthy'}
          value={'IDR 18.390.000'}></ItemValue>
        <ItemValue
          label={'Cherry Healthy'}
          value={'IDR 18.390.000'}
          valueColor={Colors.green}></ItemValue>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to : </Text>
        <ItemValue
          label={'Cherry Healthy'}
          value={'IDR 18.390.000'}></ItemValue>
        <ItemValue
          label={'Cherry Healthy'}
          value={'IDR 18.390.000'}></ItemValue>
        <ItemValue
          label={'Cherry Healthy'}
          value={'IDR 18.390.000'}></ItemValue>
        <ItemValue
          label={'Cherry Healthy'}
          value={'IDR 18.390.000'}></ItemValue>
        <ItemValue
          label={'Cherry Healthy'}
          value={'IDR 18.390.000'}></ItemValue>
      </View>

      <View style={styles.button}>
        <Button
          text={'Checkout Now'}
          onPress={() => navigation.replace('SuccessOrder')}></Button>
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: Colors.white,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
