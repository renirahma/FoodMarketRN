import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../../utils';

const ItemValue = ({label, value, valueColor = Colors.black}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value(valueColor)}>{value}</Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.grey,
  },
  value: (valueColor) => ({
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: valueColor,
  }),
});
