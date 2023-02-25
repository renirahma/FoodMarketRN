import { StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../../utils'

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        placeholder={placeholder}
        style={styles.input}
      ></TextInputRN>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
  label : {
    color:Colors.black,
    fontFamily:Fonts.regular,
    fontSize:16,
  },
  input : {
    borderWidth:1,
    borderColor:Colors.black,
    borderRadius:8,
    padding:10,
  },
})