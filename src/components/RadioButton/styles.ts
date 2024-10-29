// FindCombineSection.styles.js
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
});
