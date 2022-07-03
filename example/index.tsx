import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductCard,ProductImage, ProductTitle, ProductButtoms } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card!',
 // img: './coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard className="bg-dark text-white" product={product} initialValues={{
        count: 4,
        maxCount: 10
      }} >
        {
          ({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtoms />
            </>
          )
        }

      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
