import { StackNavigationProp } from '@react-navigation/stack';
import { Center } from 'native-base';

import { NavigatorParams } from '#app/core/navigation';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'Home'>;
};

export const HomeScreen = (_props: Props) => {
  return <Center flex={1}>Home</Center>;
};
