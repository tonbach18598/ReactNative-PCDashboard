import React, { Component } from 'react'
import SplashScreen from '../screens/splash_screen'
import SigninScreen from '../screens/signin_screen'
import ForgetScreen from '../screens/forget_screen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import DashboardScreen from '../screens/dashboard_screen'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';
import DepartmentScreen from '../screens/department_screen'
import SessionScreen from '../screens/session_screen'
import ContactScreen from '../screens/contact_screen'
import TeachScreen from '../screens/teach_screen'
import HomeScreen from '../screens/home_screen'
import { createDrawerNavigator } from 'react-navigation-drawer'
import UpdateScreen from '../screens/update_screen'
import ChangeScreen from '../screens/change_screen'
import DeveloperScreen from '../screens/developer_screen'
import ClassScreen from '../screens/class_screen'
import PostScreen from '../screens/post_screen'
import EditScreen from '../screens/edit_screen'
import UserScreen from '../screens/user_screen'
import CommentScreen from '../screens/comment_screen'
import Colors from './colors'
import { Icon } from 'react-native-elements'
import Values from './values'
import CustomTabItem from '../components/custom_tab_item'

export default class Routes {
    static get splashRoute() { return 'Splash' }
    static get signinRoute() { return 'Signin' }
    static get forgetRoute() { return 'Forget' }
    static get dashboardRoute() { return 'Dashboard' }
    static get departmentRoute() { return 'Department' }
    static get sessionRoute() { return 'Session' }
    static get contactRoute() { return 'Contact' }
    static get teachRoute() { return 'Teach' }
    static get classRoute() { return 'Class' }
    static get postRoute() { return 'Post' }
    static get editRoute() { return 'Edit' }
    static get commentRoute() { return 'Comment' }
    static get scheduleRoute() { return 'Schedule' }
    static get homeRoute() { return 'Home' }
    static get updateRoute() { return 'Update' }
    static get changeRoute() { return 'Change' }
    static get developerRoute() { return 'Developer' }
    static get userRoute() { return 'User' }
    static get signinNavigator() { return 'SigninNavigator' }
    static get dashboardNavigator() { return 'DashboardNavigator' }
    static get tabNavigator() { return 'TabNavigator' }
    static get drawerNavigator() { return 'DrawerNavigator' }
}

const TabNavigator = createMaterialTopTabNavigator(
    {
        Department: DepartmentScreen,
        Session: SessionScreen,
        Contact: ContactScreen,
        Teach: TeachScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal,tintColor }) => {
                const { routeName } = navigation.state;
                let icon;
                if (routeName === Routes.departmentRoute) {
                    icon = 'fiber_news';
                } else if (routeName === Routes.sessionRoute) {
                    icon = 'new_releases';
                } else if (routeName === Routes.contactRoute) {
                    icon = 'public';
                } else if (routeName === Routes.teachRoute) {
                    icon = 'school';
                }
                return <Icon name={icon} color={tintColor}/>;
            },
        }),
        // tabBarComponent: (props) => {
        //     const {
        //         navigation: {state: {index, routes}},
        //         style,
        //         activeTintColor,
        //         inactiveTintColor,
        //         renderIcon,
        //         jumpTo
        //     } = props;
        //     return (
        //         <View style={{
        //             flexDirection: 'row',
        //             height: 50,
        //             width: '100%',
        //             ...style
        //         }}>
        //             {
        //                 routes.map((route, idx) => (
        //                     <View
        //                         key={route.key}
        //                         style={{
        //                             flex: 1,
        //                             alignItems: 'center',
        //                             justifyContent: 'center'
        //                         }}
        //                     >
        //                         <TouchableOpacity
        //                             onPress={() => jumpTo(route.key)}
        //                         >
        //                             {renderIcon({
        //                                 route,
        //                                 focused: index === idx,
        //                                 tintColor: index === idx ? activeTintColor : inactiveTintColor
        //                             })}
        //                         </TouchableOpacity>
        //                     </View>
        //                 ))
        //             }
        //         </View>
        //     );
        // },
        initialRouteName: Routes.departmentRoute,
        pagerComponent: ViewPagerAdapter,
        tabBarOptions: {
            indicatorStyle: { backgroundColor: Colors.blueAccent },
            activeTintColor: Colors.blueAccent,
            inactiveTintColor: Colors.deepOrange,
            showLabel:true,
            style:{
                backgroundColor:Colors.white
            },
        },
    }
)

const DrawerNavigator = createDrawerNavigator(
    {
        Home: HomeScreen,
        Update: UpdateScreen,
        Change: ChangeScreen,
        Developer: DeveloperScreen
    }
)

const DashboardNavigator = createStackNavigator(
    {
        Dashboard: DashboardScreen,
        TabNavigator: TabNavigator,
        DrawerNavigator: DrawerNavigator,
        Class: ClassScreen,
        Post: PostScreen,
        Edit: EditScreen,
        Comment: CommentScreen,
        User: UserScreen
    },
    {
        initialRouteName: Routes.DashboardScreen,
        headerMode: 'none'
    }
)

const SigninNavigator = createStackNavigator(
    {
        Signin: SigninScreen,
        Forget: ForgetScreen,
    },
    {
        initialRouteName: Routes.signinRoute,
        headerMode: 'none'
    }
)

const AppNavigator = createSwitchNavigator(
    {
        Splash: SplashScreen,
        SigninNavigator: SigninNavigator,
        DashboardNavigator: DashboardNavigator
    },
    {
        initialRouteName: Routes.splashRoute,
    }
)

export const AppContainer = createAppContainer(AppNavigator)


