import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { ProductList } from '../../components/alice03/ProductList';


export const Alice03 = () => {
  return (
    <div>
        <ProductList />
    </div>
  );
}


