import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';

const ClearButton = ({ buttonText, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
      <Text style={styles.text}>{buttonText}</Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ClearButton;
