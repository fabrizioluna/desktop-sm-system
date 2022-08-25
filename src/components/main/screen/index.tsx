import { Navigation } from 'components/layout/navigation';
import React, { Fragment, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  configuration: {
    title: String;
  };
}

export const ScreenLayout = ({ configuration, children }: Props) => {
  return (
    <Fragment>
      <header>
        <head>
          <title>{configuration.title}</title>
        </head>
        <Navigation />
      </header>
      {children}
      <footer></footer>
    </Fragment>
  );
};
