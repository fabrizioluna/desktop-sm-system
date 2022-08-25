import React from 'react';
import { ScreenLayout } from 'components/main/screen';
import { CustomButton } from 'components/layout/button';

export default function Home() {
  return (
    <ScreenLayout configuration={{ title: 'Pagina de inicio' }}>
      <h1>Aqui esta la pagina de Home</h1>
      <CustomButton configuration={{ title: 'Botón con link interno', path: '/sales' }} />
      <CustomButton configuration={{ title: 'Botón con link externo', url: '/sales' }} />
    </ScreenLayout>
  );
}
