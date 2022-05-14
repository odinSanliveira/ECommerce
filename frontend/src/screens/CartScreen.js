import React from 'react'
import { useParams, useLocation, useSearchParams } from 'react-router-dom';

export default function CartScreen() {
  const { id } = useParams();
  const { search } = useLocation();
  const [searchParms] = useSearchParams();

  const productID = id;
  const qty = search ? Number(search.split("=")[1]) : 1;

  console.log({ productID, qty, qtyParam: Number(searchParms.get("qty")) });
  return (
    <div>
        <h1>CART</h1>
        <h2>Material de id: {id}</h2>
    </div>
  )
}
