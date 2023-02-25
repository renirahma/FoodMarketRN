import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcHomeOff, IcHomeOn, IcOrderOff, IcOrderOn, IcProfileOff, IcProfileOn} from '../../../assets';
import {Colors} from '../../../utils';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <IcHomeOn></IcHomeOn> : <IcHomeOff></IcHomeOff>;
    case 'Order':
      return focus ? <IcOrderOn></IcOrderOn> :<IcOrderOff></IcOrderOff> ;
    case 'Profile':
      return focus ? <IcProfileOn></IcProfileOn> : <IcProfileOff></IcProfileOff>;
    default:
      return <IcHomeOn></IcHomeOn>;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.containerTab}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused}></Icon>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  containerTab: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingTop: 15,
    paddingHorizontal: 50,
    paddingBottom: 13,
    justifyContent: 'space-between',
  },
});
