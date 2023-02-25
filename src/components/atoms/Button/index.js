import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../../utils';

const Button = ({color = Colors.yellow, text, textColor = Colors.black, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (color) => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
  text: (textColor) => ({
    fontSize: 14,
    fontFamily: Fonts.medium,
    textAlign: 'center',
    color: textColor,
  }),
});
