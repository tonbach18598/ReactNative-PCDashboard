import React from 'react'
import SplashScreen from '../screens/splash_screen'
import SigninScreen from '../screens/signin_screen'
import ForgetScreen from '../screens/forget_screen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
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
import CustomDrawer from '../components/custom_drawer'
import { Text } from 'react-native'

export default class Routes {
    static get splashRoute() { return 'Splash' }
    static get signinRoute() { return 'Signin' }
    static get forgetRoute() { return 'Forget' }
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
    static get featureNavigator() { return 'featureNavigator' }
}

const TabNavigator = createBottomTabNavigator(
    {
        Department: DepartmentScreen,
        Session: SessionScreen,
        Contact: ContactScreen,
        Teach: TeachScreen
    },
    {
        initialRouteName: Routes.departmentRoute,
        headerMode: 'none',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state
                let icon
                if (routeName === Routes.departmentRoute) {
                    icon = 'fiber-new'
                }
                else if (routeName === Routes.sessionRoute) {
                    icon = 'people'
                }
                else if (routeName === Routes.contactRoute) {
                    icon = 'public'
                }
                else if (routeName === Routes.teachRoute) {
                    icon = 'school'
                }

                return <Icon name={icon} color={tintColor} />;
            },
            tabBarLabel: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let title
                if (routeName === Routes.departmentRoute) {
                    title = Values.DEPARTMENT
                }
                else if (routeName === Routes.sessionRoute) {
                    title = Values.SESSION
                }
                else if (routeName === Routes.contactRoute) {
                    title = Values.CONTACT
                }
                else if (routeName === Routes.teachRoute) {
                    title = Values.TEACH
                }

                return <Text style={{ color: tintColor, fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{title}</Text>
            }
        }),
        tabBarOptions: {
            activeTintColor: Colors.blue,
            inactiveTintColor: Colors.deepOrangeAccent,
            style: { height: 56 }
        }
    }
)

const DrawerNavigator = createDrawerNavigator(
    {
        TabNavigator: TabNavigator
    },
    {
        initialRouteName: Routes.TabNavigator,
        headerMode: 'none',
        contentComponent: CustomDrawer,
        drawerWidth: 304
    }
)

const DashboardNavigator = createStackNavigator(
    {
        DrawerNavigator: DrawerNavigator,
        Home: HomeScreen,
        Update: UpdateScreen,
        Change: ChangeScreen,
        Developer: DeveloperScreen,
        Class: ClassScreen,
        Post: PostScreen,
        Edit: EditScreen,
        User: UserScreen,
        Comment: CommentScreen
    },
    {
        initialRouteName: Routes.DrawerNavigator,
        headerMode: 'none',
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
        headerMode: 'none'
    }
)

export const AppContainer = createAppContainer(AppNavigator)