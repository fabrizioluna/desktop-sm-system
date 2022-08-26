import React from 'react';
import { ScreenLayout } from 'components/main/screen';
import { CustomButton } from 'components/layout/button';
import { Text } from 'components/layout/text';
import { Button } from '@material-ui/core';

export default function Home() {
  return (
    <ScreenLayout configuration={{ title: 'Pagina de inicio' }}>
      <Button variant='contained' color='primary'>
        Secondary
      </Button>
      <Text
        config={{ fontsize: 5, align: 'center', bold: false }}
      >
        Text to test my own component
      </Text>
      <CustomButton
        configuration={{ title: 'Button 1', path: '/sales', type: 'secondary' }}
      />
    </ScreenLayout>
  );
}
