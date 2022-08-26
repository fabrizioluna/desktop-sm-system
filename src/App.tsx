import React, { useMemo, useState } from 'react';
import {
  Button,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import Routes from 'configuration/routes';
import { getThemePallete } from 'configuration/theme';

export default function App() {
  const [switchTheme, setSwitchTheme] = useState<boolean>(true);

  // Swtich dark theme
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: switchTheme ? 'light' : 'dark',
          ...getThemePallete(switchTheme),
        },
      }),
    [switchTheme]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
      <Button onClick={() => setSwitchTheme(!switchTheme)} color='inherit'>
        {theme.palette.type}
      </Button>
    </ThemeProvider>
  );
}
