import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {Colors, Fonts} from '../../../utils';

const Select = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
        // selectedValue={selectedLanguage}
        // onValueChange={(itemValue, itemIndex) =>
        //   setSelectedLanguage(itemValue)
        // }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    color: Colors.black,
    fontFamily: Fonts.regular,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical:0,
  },
});
