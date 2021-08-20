import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../../constants/routes';

export const Menu = () => (
  <ul>
    <li>
      <Link to={Routes.HOME}>Home</Link>
    </li>
    <li>
      <Link to={Routes.PRODUCTS}>Products</Link>
    </li>
  </ul>
);
