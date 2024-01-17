import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  radioBtnContainerStyle: {
    flexDirection: 'row',
    padding: 10,
  },
  radioBtnGroupStyle: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
  },
});
