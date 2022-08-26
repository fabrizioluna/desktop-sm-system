import { amber, deepOrange, grey } from '@material-ui/core/colors';

export const getThemePallete = (mode: boolean) => ({
  mode,
  ...(mode
    ? {
        // light theme
        primary: amber,
        divider: amber[200],
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
    : {
        // dark theme
        primary: {
          main: '#070743',
        },
        divider: deepOrange[700],
        background: {
          default: '#1c1c26',
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
});
