import { addons } from '@storybook/addons';
import theme from './theme/theme';
import { themeStyles } from './theme/theme.css';

addons.setConfig({
  theme: theme,
});