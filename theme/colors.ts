import type { PaletteMode } from '@mui/material';

const LIGHT_COLOR_THEME = {
  common: {
    black: '#000',
    white: '#fff',
    flush: '#f0f'
  },
  primary: {
    50: '#FAFBFF',
    100: '##F0F4FF',
    200: '#E5ECFF',
    300: '#B3C8FF ',
    400: '#799DFF',
    500: '#5784FF',
    600: '#4A70D9',
    700: '#3956A6',
    800: '#30488C',
    900: '#2C4280',
    contrastText: '#fff',
  },
  neutral: {
    50: '#FCFCFD',
    100: '#F7F8F9',
    200: '#F7F8F9',
    300: '#CFD4DC ',
    400: '#98A3B3',
    500: '#61718A',
    600: '#536075',
    700: '#3F4A5A',
    800: '#313945',
    900: '#1E222A',
    contrastText: '#fff',
  },
  warning: {
    main: '#FFAB00',
    300: '#FDECCE',
    400: '#F9C56C',
    500: '#F59E0B',
    600: '#C47E08',
    700: '#935F06',
    contrastText: '#fff',
  },

  error: {
    main: '#F26359',
    300: '#FCDAD7',
    400: '#F7A19B',
    500: '#F26359',
    600: '#C8392F',
    700: '#78221C',
    contrastText: '#fff',
  },

  success: {
    main: '#5CCB88',
    300: '#D8F3E3',
    400: '#9DE0B8',
    500: '#5CCB88',
    600: '#3BC171',
    700: '#27814B',
    contrastText: '#fff',
  },
  secondary: {
    main: '#CFD4DC',
  },
  text: {
    primary: '#3F4A5A',
  },
  info: {
    main: '#98A3B3',
  },
  avatar: {
    main: '#a80698',
    background: 'rgba(168, 6, 152, 0.1)',
  },
};

export const getDesignColorPalette = (mode: PaletteMode) => ({
  mode,
  // TODO we have no palette for dark mode so for now I made them both the same palette
  ...(mode === 'light' ? LIGHT_COLOR_THEME : LIGHT_COLOR_THEME),
});
