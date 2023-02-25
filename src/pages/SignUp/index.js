import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, Gap, Button, TextInput} from '../../components';
import {Colors, Fonts} from '../../utils';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Sign Up'}
        subTitle={'Register and Eat'}
        onBack={() => {}}></Header>
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.photoContainer}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>

        <TextInput
          label={'Full Name'}
          placeholder={'Type your full name'}></TextInput>
        <Gap height={16}></Gap>
        <TextInput
          label={'Email Address'}
          placeholder={'Type your email address'}></TextInput>
        <Gap height={16}></Gap>
        <TextInput
          label={'Password'}
          placeholder={'Type your password'}></TextInput>
        <Gap height={24}></Gap>
        <Button text={'Continue'} onPress={()=> navigation.navigate('SignUpAddress')}></Button>
      </View>
    </View>
  );
};

export default SignUp;

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
  photo:{
    alignItems:'center',
    marginTop:26,
    marginBottom:16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: Colors.grey,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: Colors.grey2,
    padding: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: Fonts.light,
    color: Colors.grey,
    textAlign: 'center',
  },
});
