import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(()=> {
      navigation.replace('SignIn')
    }, 200)
  },[]);
  return (
    <View style={styles.bg}>
      <Logo></Logo>
      <View style={{height: 38}}></View>
      <Text style={styles.txtLogo}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#FFC700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLogo: {
    color: '#020202',
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
