import { create } from '@storybook/theming';
import logo from './public/assets/images/logo.png';

export default create({
  base: 'dark',
  colorPrimary: '#5d3895',
  colorSecondary: '#60ed90',

  // UI
  appBg: '#333333',
  appContentBg: '#333333',
  appBorderColor: '#5d3895',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#000000',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#ffffff',
  barBg: '#5d3895',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Symbiote Design System',
  brandUrl: 'https://symbiote.com.au',
  brandImage: `/${logo}`
});