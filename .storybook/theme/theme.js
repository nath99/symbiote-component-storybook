import { create } from '@storybook/theming';
import logo from '../public/assets/images/logo.png';

export default create({
  base: 'dark',
  colorPrimary: '#5d3895',
  colorSecondary: '#60ed90',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#60ed90',
  barBg: '#5d3895',

  // Form colors
  inputBg: 'white',
  inputBorder: '#5d3895',
  inputTextColor: 'black',
  inputBorderRadius: 20,

  brandTitle: 'Symbiote Design System',
  brandUrl: 'https://symbiote.com.au',
  brandImage: `/${logo}`
});