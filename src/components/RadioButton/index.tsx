import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from './styles';
export const RadioButton = ({
  label,
  setVal,
  selected,
}: {
  label: string;
  setVal: () => void;
  selected: boolean;
}) => {
  return (
    <View style={styles.radioBtnContainerStyle}>
      <View
        style={[
          styles.radioBtnGroupStyle,
          {
            backgroundColor: selected ? '#cee5f6' : '#fff',
          },
        ]}>
        <TouchableOpacity
          style={[
            styles.radioCircle,
            {borderColor: selected ? '#68b6ef' : '#ccc'},
          ]}
          onPress={() => {
            setVal(label);
          }}>
          <View
            style={[
              styles.selectedRb,
              // {backgroundColor: selected && '#68b6ef'},
            ]}
          />
        </TouchableOpacity>
        <Text style={{paddingLeft: 10}}>{label}</Text>
      </View>
    </View>
  );
};
