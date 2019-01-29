import { createStackNavigator, createAppContainer } from 'react-navigation';

import Splash from './screens/auth/splash';

import HomeScreen from './screens/home/home';
import MovieDetail from './screens/home/detail';

export const Root = createStackNavigator(
	{
		Splash: { screen: Splash },
		LandingScreen: { screen: HomeScreen },
		MovieDetail: { screen: MovieDetail },
	}, {
		mode: 'modal',
		headerMode: 'none',
	}
)

export default createAppContainer(Root);
