import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlEmptyOrder} from '../../../assets';
import {Colors, Fonts} from '../../../utils';
import {Gap, Button} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const EmptyOrder = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <IlEmptyOrder></IlEmptyOrder>
      <Gap height={30}></Gap>
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Gap height={6}></Gap>
      <Text style={styles.subTitle}>Seems like you have not</Text>
      <Text style={styles.subTitle}>ordered any food yet</Text>
      <Gap height={30}></Gap>
      <View style={styles.buttonContainer}>
        <Button
          text={'Find Foods'}
          onPress={() => navigation.replace('MainApp')}></Button>
      </View>
    </View>
  );
};

export default EmptyOrder;

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
