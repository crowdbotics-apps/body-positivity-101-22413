import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList169603Navigator from '../features/NotificationList169603/navigator';
import Settings169602Navigator from '../features/Settings169602/navigator';
import Settings169594Navigator from '../features/Settings169594/navigator';
import UserProfile169592Navigator from '../features/UserProfile169592/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList169603: { screen: NotificationList169603Navigator },
Settings169602: { screen: Settings169602Navigator },
Settings169594: { screen: Settings169594Navigator },
UserProfile169592: { screen: UserProfile169592Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
