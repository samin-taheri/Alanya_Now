import {FetchDataPage, FormPage, HomePage, LoginPage} from '@/screens';
import {IScreen} from '@/utils';

import {HomeStackNavigationProps} from './types';
import routes from '../../Routes';
import ForgotPassword from '@/screens/ForgotPassword';
import SignUp from '@/screens/SignUp';
import ServicesDetails from '@/screens/ServicesDetails';
import { AboutScreen } from '@/screens/About/AboutScreen';
import EventDetails from '@/screens/EventDetails';

const Screens = [
  {
    title: 'home',
    name: routes.HOME_SCREEN,
    component: HomePage,
    headerShown: false,
  },
  {
    title: 'fetch_data',
    name: routes.FETCH_DATA_SCREEN,
    component: FetchDataPage,
    headerShown: false,
  },
  {
    title: 'Forgot Password Page',
    name: routes.FORGOTPASSWORD_SCREEN,
    component: ForgotPassword,
    headerShown: false,
  },
  {
    title: 'Signup Page',
    name: routes.SIGNUP_SCREEN,
    component: SignUp,
    headerShown: false,
  },
  {
    title: 'Login Page',
    name: routes.LOGIN_SCREEN,
    component: LoginPage,
    headerShown: false,
  },
  {
    title: 'form',
    name: routes.FORM_SCREEN,
    component: FormPage,
    headerShown: false,
  },
  {
    title: 'Services Details',
    name: routes.SERVICES_DETAILS,
    component: ServicesDetails,
    headerShown: false,
  },
  {
    title: 'Event Details',
    name: routes.EVENT_DETAILS,
    component: EventDetails,
    headerShown: false,
  },
  {
    title: 'About Screen',
    name: routes.ABOUT_SCREEN,
    component: AboutScreen,
    headerShown: false,
  },
] as Array<IScreen<HomeStackNavigationProps>>;

export default Screens;
