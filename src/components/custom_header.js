import React from 'react'
import { Header, Button, Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../ultilities/colors';

const CustomHeader = ({ left, title, onPress }) => (
  <Header statusBarProps={{ translucent: true }}
    leftComponent={<Button icon={<Icon name={left} color={Colors.white} />} type="clear" onPress={onPress} />}
    centerComponent={{ text: title, style: { color: Colors.white, fontWeight: 'bold', fontSize: 21 } }}
    ViewComponent={LinearGradient}
    linearGradientProps={{
      start: { x: 1.0, y: 0.0 },
      end: { x: 1.0, y: 1.0 },
      colors: ['#448aff', '#2196f3', '#03a9f4', '#40c4ff']
    }}
  />
)

export default CustomHeader