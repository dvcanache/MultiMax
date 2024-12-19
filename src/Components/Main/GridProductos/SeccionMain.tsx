import React from 'react'
import GridProductos from "../GridProductos/GridProductos";
import { ProductsData } from "../../../data/products";

const SeccionMain = () => {
  return (<>
    <div className="container mx-auto py-8">
    <GridProductos products={ProductsData} />
  </div>
  <div className="my-8 border-t border-gray-300 w-11/12 mx-auto"></div>
  </>
  )
}

export default SeccionMain