import type { Theme } from '@mui/material/styles';

export const Alert = {
  MuiAlert: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          color: 'common.flush',
        }),
    },
  },
};
