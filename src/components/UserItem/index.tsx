import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from './styles';
export const UserItem = ({
  name,
  selected,
  role,
}: {
  name: string;
  selected?: boolean;
  role: string;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.userItemContainerStyle,
        {
          backgroundColor: selected && '#3740ff11',
        },
      ]}>
      <View style={{backgroundColor: '#dfeef3', padding: 15, borderRadius: 5}}>
        <Text style={{color: '#66codc'}}>{name.charAt(0).toUpperCase()}</Text>
      </View>
      <View style={{paddingLeft: 10, flex: 1}}>
        <Text style={{fontSize: 18, marginBottom: 10}}>{name}</Text>
        <Text style={{fontSize: 14, color: '#616569'}}>{role}</Text>
      </View>
    </TouchableOpacity>
  );
};
