import React from 'react';
import { Link } from 'react-router-dom';

import { DATA_PRODUCTS } from '../../data/products';
import { AbsoluteWrapper } from '../AbsoluteWrapper';

export const Products = () => (
  <AbsoluteWrapper>
    <h1>Olá, eu sou a página de produtos</h1>

    <ul>
      {DATA_PRODUCTS.map((product) =>
        <li key={String(product.id)}>
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </li>
      )}
    </ul>
  </AbsoluteWrapper>
);