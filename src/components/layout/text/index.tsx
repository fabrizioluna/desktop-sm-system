import { Typography } from '@material-ui/core';
import React, { ReactNode } from 'react';

interface Props {
  config: {
    fontsize: number;
    bold: boolean;
    align: CanvasTextAlign;
  };
  children: ReactNode;
}

export const Text = ({ config, children }: Props) => {
  return (
    <Typography
      component='h1'
      variant='h1'
      align='center'
      color='textPrimary'
      gutterBottom
      style={{
        fontSize: `${config.fontsize}rem`,
        textAlign: `${config.align}`,
        fontWeight: `${config.bold ? 'bold' : '0px'}`,
      }}
    >
      {children}
    </Typography>
  );
};
