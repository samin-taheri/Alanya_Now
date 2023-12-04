import { FetchDataPage, FormPage, HomePage, LoginPage, SignUp, SplashScreen} from '@/screens';
import {IScreen} from '@/utils';
import {BottomTabStackNavigationProps} from './types';
import {ICONS} from '../../utils/icon-enums';
import Routes from '../Routes';
import { AboutScreen } from '@/screens/About/AboutScreen';

export const Screens = [
  {
    title: 'home',
    name: Routes.HOME_SCREEN,
    component: HomePage,
    icon: ICONS.home,
    headerShown: false,
  },
  {
    title: 'Fetch data',
    name: Routes.FETCH_DATA_SCREEN,
    component: FetchDataPage,
    icon: ICONS.grid,
    headerShown: false,
  },
  {
    title: 'Form',
    name: Routes.ABOUT_SCREEN,
    component: AboutScreen,
    icon: ICONS.star,
    headerShown: false,
  },
  {
    title: 'Login',
    name: Routes.LOGIN_SCREEN,
    component: LoginPage,
    icon: ICONS.location,
    headerShown: false,
  },
] as unknown as IScreen<BottomTabStackNavigationProps>[];
