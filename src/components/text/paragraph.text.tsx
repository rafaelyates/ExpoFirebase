import { Text } from 'react-native-paper';

import styled from 'styled-components/native';
import theme from 'styled-theming';

import { TEXT_COLORS } from '../../constants/color.constants';

export default styled(Text)`
  color: ${theme('mode', { light: TEXT_COLORS.LIGHT, dark: TEXT_COLORS.DARK })};
`;
