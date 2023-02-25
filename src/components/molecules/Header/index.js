import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Fonts} from '../../../utils/Fonts';
import {Colors} from '../../../utils/Colors';
import {IcBack} from '../../../assets/Icon';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <View style={styles.back}>
            <IcBack></IcBack>
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.medium,
    color: Colors.black,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: Fonts.light,
    color: Colors.grey,
  },
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft:-10,
  },
});
