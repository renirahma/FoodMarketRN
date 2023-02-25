import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccessOrder} from '../../assets/Ilutration';
import {Button, Gap} from '../../components';
import {Colors, Fonts} from '../../utils';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessOrder></IlSuccessOrder>
      <Gap height={30}></Gap>
      <Text style={styles.title}>You’ve Made Order</Text>
      <Gap height={6}></Gap>
      <Text style={styles.subTitle}>Just stay at home while we are</Text>
      <Text style={styles.subTitle}>preparing your best foods</Text>
      <Gap height={30}></Gap>
      <View style={styles.buttonContainer}>
        <Button
          text={'Order Other Foods'}
          onPress={() => navigation.replace('MainApp')}></Button>
        <Gap height={12}></Gap>
        <Button
          text={'View My Order'}
          color={Colors.grey}
          textColor={Colors.white}
          onPress={() => navigation.replace('MainApp', {screen:'Order'})}></Button>
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: Fonts.light,
    color: Colors.grey,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
