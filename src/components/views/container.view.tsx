import Constants from 'expo-constants';
import styled from 'styled-components/native';
import theme from 'styled-theming';

import { BACKGROUND_COLORS } from '../../constants/color.constants';

const backgroundColor = theme('mode', { light: BACKGROUND_COLORS.LIGHT, dark: BACKGROUND_COLORS.DARK });
export default styled.SafeAreaView`
  flex: 1;
  background-color: ${backgroundColor};
  padding-top: ${Constants.statusBarHeight}px;
`;
