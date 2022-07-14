import React from 'react';
import {View} from 'react-native';

interface ISpacerProps {
  range?: number;
}

const Spacer: React.FC<ISpacerProps> = ({range}) => {
  // eslint-disable-next-line react-native/no-inline-styles
  return <View style={{marginBottom: range ? range : 10}} />;
};

export default Spacer;
