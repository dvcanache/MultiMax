import { useState } from "react";
import ProductCard from './ProductCard';

function GridProductos({ products }: any) {
  const [items, setItems] = useState(30);

  const loadMore = () => {
    setItems(prev => prev + 10)
  }
  
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.slice(0, items).map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    <div className="flex justify-center mt-4">
      {items < products.length && (        
      <button onClick={loadMore} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        Ver mas
      </button>
      )}
    </div>
    </>
  );
}

export default GridProductos;

