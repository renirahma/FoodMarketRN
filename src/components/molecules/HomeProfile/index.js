import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../../assets';
import { Colors, Fonts } from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>FoodMarket</Text>
        <Text style={styles.desc}>Let’s get some foods</Text>
      </View>
      <Image source={ProfileDummy} style={styles.profile}></Image>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: Colors.white,
  },
  appName: {
    fontFamily: Fonts.medium,
    color: Colors.black,
    fontSize: 22,
  },
  desc: {
    fontSize: 14,
    fontFamily: Fonts.light,
    color: Colors.grey,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
