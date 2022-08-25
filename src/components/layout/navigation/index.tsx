import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <nav>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/sales'>Punto de venta</Link>
        </li>
        <li>
          <Link to='/inventory'>Inventario</Link>
        </li>
        <li>
          <Link to='/finance'>Finanzas</Link>
        </li>
      </nav>
    </div>
  );
};
