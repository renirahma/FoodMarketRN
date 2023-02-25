import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccessSignUp} from '../../assets/Ilutration';
import {Button, Gap} from '../../components';
import {Colors, Fonts} from '../../utils';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessSignUp></IlSuccessSignUp>
      <Gap height={30}></Gap>
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6}></Gap>
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <Gap height={30}></Gap>
      <View style={styles.buttonContainer}>
        <Button text={'Find Foods'} onPress={()=> navigation.replace('MainApp')}></Button>
      </View>
    </View>
  );
};

export default SuccessSignUp;

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
    width:'100%',
    paddingHorizontal:80,
  },
});
