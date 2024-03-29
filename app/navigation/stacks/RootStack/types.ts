import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Routes} from '@/navigation';
import {DialogProps, Keyof} from '@/utils';

export type RootStackNavigationProps = {
  [Routes.SPLASH_SCREEN]: undefined;
  [Routes.HOME_SCREEN]: {name: string;};  
  [Routes.LOGIN_SCREEN]: undefined;
  [Routes.MAIN_DRAWER_ROOT]: undefined;
  [Routes.MAIN_TABS_ROOT]: undefined;
  [Routes.FORGOTPASSWORD_SCREEN]: undefined;
  [Routes.SIGNUP_SCREEN]: undefined;
  [Routes.ABOUT_SCREEN]: undefined;
  [Routes.ALERT]: DialogProps;
  [Routes.SERVICES_DETAILS]: {
    id: string;
  };  
  [Routes.EVENT_DETAILS]: {
    id: string;
  }; 
};

export type RootStackNavigationPropsType = StackNavigationProp<RootStackNavigationProps>;

export type RootStackNavigationRouteType<TPageName extends Keyof<RootStackNavigationProps>> = RouteProp<RootStackNavigationProps, TPageName>;
