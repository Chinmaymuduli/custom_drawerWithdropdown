import {CompositeNavigationProp} from '@react-navigation/native';
import {Pages, Private} from '~/screens';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type BottomTabsTypes = {
  Dashboard: undefined;
  Polices: undefined;
};

type PrivateScreens = {
  [key in keyof typeof Private | keyof typeof Pages]: undefined;
};

// type OmittedScreens =
//   | 'TransactionDetails'
//   | 'OrderDetails'
//   | 'AddMenu'
//   | 'ConfirmOrder';
type OmittedScreens = '';

export type PrivateNavigationProp = Omit<PrivateScreens, OmittedScreens> & {
  //   TransactionDetails: {
  //     TransactionId?: string;
  //     isManager?: boolean;
  //   };
};

export type PrivateRoutesTypes = {
  TabLayout: undefined;
  DrawerLayout: undefined;
  //   Pages: undefined;
} & PrivateNavigationProp;

export type PrivateScreenProps = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsTypes>,
  NativeStackNavigationProp<PrivateRoutesTypes>
>;
