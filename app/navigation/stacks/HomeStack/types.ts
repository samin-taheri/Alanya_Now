import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Routes} from '@/navigation';
import {Keyof} from '@/utils';

export type HomeScreen = {
  name: string;
};

export type HomeStackNavigationProps = {
  [Routes.HOME_SCREEN]: {
    name: string;
  };
  [Routes.SERVICES_DETAILS]: {
    id: string;
  }; 
  [Routes.EVENT_DETAILS]: {
    id: string;
  }; 
  [Routes.HOME_ROOT]: undefined;
  [Routes.FORGOTPASSWORD_SCREEN]: undefined;
  [Routes.SIGNUP_SCREEN]: undefined;
  [Routes.LOGIN_SCREEN]: undefined;
  [Routes.MAIN_TABS_ROOT]: undefined;  
  [Routes.ABOUT_SCREEN]: undefined;  
  [Routes.MAIN_DRAWER_ROOT]: undefined;  
  [Routes.FORM_SCREEN]: {
    detailId: string;
  };
};

export type HomeStackNavigationPropsType = StackNavigationProp<HomeStackNavigationProps>;

export type HomeStackNavigationRouteType<TPageName extends Keyof<HomeStackNavigationProps>> = RouteProp<HomeStackNavigationProps, TPageName>;
