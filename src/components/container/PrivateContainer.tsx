import {useNavigation} from '@react-navigation/native';
import {Box, HStack, Text} from 'native-base';
import React from 'react';
import {COLORS} from '~/styles';
type Props = {
  title?: string;
  color?: string;
  icons?: {
    icon?: any;
    onPress?: () => void;
    hasDrawer?: boolean;
    side: 'LEFT' | 'RIGHT';
  }[];
} & React.ComponentProps<typeof Box>;
const PrivateContainer = ({children, color, title, icons, ..._box}: Props) => {
  const {canGoBack, goBack, dispatch} = useNavigation();
  const leftIcon = icons?.find(_ => _.side === 'LEFT');
  const rightIcons = icons?.filter(_ => _.side === 'RIGHT');
  return (
    <Box safeAreaTop flex={1} {..._box}>
      {/* <HStack>
         <Box>

         </Box>
      </HStack> */}
      {children}
    </Box>
  );
};

export default PrivateContainer;
