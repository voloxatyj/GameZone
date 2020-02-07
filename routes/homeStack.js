import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';


const screens = {
	Home: {
		screen: Home,
		navigationOptions: ({ navigation }) => {
			return {
				headerTitle: () => <Header title='GameZone' navigation={navigation} />
			}
		},
	},
	ReviewDetails: {
		screen: ReviewDetails,
		navigationOptions: {
			title: 'ReviewDetails'
		}
	}
}

const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerTintColor: '#444',
		headerStyle: { backgroundColor: '#eee', height: 120},
		headerTitleAlign: 'center'
	}
});

export default HomeStack;