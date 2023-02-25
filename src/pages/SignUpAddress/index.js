import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput, Button, Gap, Select} from '../../components';
import {Colors, Fonts} from '../../utils';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Address'}
        subTitle={'Make sure it’s valid'}
        onBack={() => {}}></Header>
      <View style={styles.container}>
        <TextInput
          label={'Phone No.'}
          placeholder={'Type your phone number'}></TextInput>
        <Gap height={16}></Gap>
        <TextInput
          label={'Address'}
          placeholder={'Type your address'}></TextInput>
        <Gap height={16}></Gap>
        <TextInput
          label={'House No.'}
          placeholder={'Type your house number'}></TextInput>
        <Gap height={16}></Gap>
        <Select label={'City'}></Select>
        <Gap height={24}></Gap>
        <Button
          text={'Sign Up Now'}
          onPress={() => navigation.replace('SuccessSignUp')}></Button>
      </View>
    </View>
  );
};

export default SignUpAddress;

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
