import {HomePage, LoginPage, SplashScreen} from '@/screens';
import {IScreen} from '@/utils';
import {RootStackNavigationProps} from './types';
import {BottomTabNavigation} from '../../bottom-tab/BottomTabNavigation';
import {DrawerMenuNavigaiton} from '../../drawer/DrawerMenuNavigation';
import Routes from '../../Routes';
import HomeStack from '../HomeStack';
import ForgotPassword from '@/screens/ForgotPassword';
import SignUp from '@/screens/SignUp';
import ServicesDetails from '@/screens/ServicesDetails';
import { AboutScreen } from '@/screens/About/AboutScreen';
import EventDetails from '@/screens/EventDetails';

const Screens = [
  {
    title: 'Splash Screen',
    name: Routes.SPLASH_SCREEN,
    component: SplashScreen,
    headerShown: false,
  },
  {
    title: 'Login Page',
    name: Routes.LOGIN_SCREEN,
    component: LoginPage,
    headerShown: false,
  },
   {
    title: 'Home Page',
    name: Routes.HOME_ROOT,
    component: HomeStack,
    headerShown: false,
  },
   {
    title: 'Forgot Password Page',
    name: Routes.FORGOTPASSWORD_SCREEN,
    component: ForgotPassword,
    headerShown: false,
  },
   {
    title: 'Signup Page',
    name: Routes.SIGNUP_SCREEN,
    component: SignUp,
    headerShown: false,
  },
  {
    title: 'Side Menu',
    name: Routes.MAIN_DRAWER_ROOT,
    component: DrawerMenuNavigaiton,
    headerShown: false,
  },
  {
    title: 'Tab Menu',
    name: Routes.MAIN_TABS_ROOT,
    component: BottomTabNavigation,
    headerShown: false,
  },  
  {
    title: 'Services Details',
    name: Routes.SERVICES_DETAILS,
    component: ServicesDetails,
    headerShown: false,
  },
  {
    title: 'Event Details',
    name: Routes.EVENT_DETAILS,
    component: EventDetails,
    headerShown: false,
  },
  {
    title: 'About Screen',
    name: Routes.ABOUT_SCREEN,
    component: AboutScreen,
    headerShown: false,
  },

] as Array<IScreen<RootStackNavigationProps>>;

export default Screens;
