import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcMin, IcPlus} from '../../../assets';
import {Colors, Fonts} from '../../../utils';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcMin></IcMin>
      </TouchableOpacity>

      <Text style={styles.value}>14</Text>
      <TouchableOpacity>
        <IcPlus></IcPlus>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.black,
    marginHorizontal: 10,
  },
});
