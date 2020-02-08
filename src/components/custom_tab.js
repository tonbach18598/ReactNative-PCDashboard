import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Dimensions, Animated} from 'react-native'
import {Icon} from 'react-native-elements'
import PropTypes from 'prop-types'
import Colors from '../ultilities/colors';
import CustomHeader from '../components/custom_header'

// export const CustomTab = ({
//    navigation,
//    navigationState,
//    title,
//    icon,
//    activeTintColor,
//    inactiveTintColor
//  }) => (
//    <View style={{flex:4,flexDirection:'row'}}>
//      {navigationState.routes.map((route, index) => {
//        const color = navigationState.index === index ? activeTintColor : inactiveTintColor;
//        return (
//          <TouchableOpacity style={{flex:1}}
//            onPress={() => {
//              navigation.navigate(route.routeName);
//            }}
//            key={route.routeName}
//          >
//            <View style={{flexDirection:'column',height:Dimensions.get('window').height*0.05, backgroundColor:Colors.white, alignItems:'center'}}>
//              <Icon name='home'/>
//              <Text>TAB</Text>
//            </View>
//          </TouchableOpacity>
//        );
//      })}
//    </View>
//  );

export const CustomTab = (props) => {
  const { navigationState, navigation, position } = props
  return (
    <View>
        <CustomHeader leftIcon='menu' onPress={()=>{navigation.openDrawer()}} />
    <View style={{
      height: 50,
      backgroundColor: Colors.white,
      flexDirection: "row",
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
    {navigationState.routes.map((route, index) => {
      // const focusAnim = position.interpolate({
      //   inputRange: [index - 1, index, index + 1],
      //   outputRange: [0, 1, 0]
      // })
      return (
        <Tab 
          // focusAnim={focusAnim}
          title={route.routeName} 
          onPress={() => navigation.navigate(route.routeName)}
        />
      )
    })}
    </View>
    </View>
  )
}

const Tab = ({ focusAnim, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {/* <Animated.View
        style={{
          padding: 10,
          borderRadius: 10,
          // backgroundColor: focusAnim.interpolate({
          //   inputRange: [0, 1],
          //   outputRange: ["transparent", "tomato"]
          // })
        }}
      >
        <Animated.Text
          style={{
            color: focusAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["#444", "#fff"]
            })
          }}
        >{title}</Animated.Text>
      </Animated.View> */}
      <Text>TAB</Text>
    </TouchableOpacity>
  )
}