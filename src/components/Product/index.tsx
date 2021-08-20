import React from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { DATA_PRODUCTS } from '../../data/products';

export const Product = () => {
  const params = useParams<{ id: string; }>();
  const history = useHistory();

  const product = DATA_PRODUCTS.find(prod => prod.id === params.id);

  return (
    <>
      {!product && <Redirect to="/" />}
      <div>
        <h2>Olá, veja os detalhes do produto ${product?.name}</h2>
        <p>Deseja comprar o produto ${product?.name}?</p>
        <button type="button" onClick={() => history.push('/buy')}>
          Comprar
        </button>
      </div>
    </>
  );
};
