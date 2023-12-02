import React from 'react';
import ProductCard from '../../ProductCard/index';



const ProductsContainer = (props) => {
    const {products} = props;
  return (
    <div className="flex flex-wrap justify-center p-20">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;