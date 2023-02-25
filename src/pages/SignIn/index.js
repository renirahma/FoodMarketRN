import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput, Button, Gap} from '../../components';
import {Colors} from '../../utils/Colors';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={'Sign In'} subTitle={'Find your best ever meal'}></Header>
      <View style={styles.container}>
        <TextInput
          label={'Email Address'}
          placeholder={'Type your email address'}></TextInput>
        <Gap height={16}></Gap>
        <TextInput
          label={'Password'}
          placeholder={'Type your password'}></TextInput>
        <Gap height={24}></Gap>
        <Button text={'Sign In'}></Button>
        <Gap height={12}></Gap>
        <Button
          text={'Create New Account'}
          color={Colors.grey}
          textColor={Colors.white}
          onPress={()=> navigation.navigate("SignUp")}
          ></Button>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    flex: 1,
    marginTop: 24,
  },
});
