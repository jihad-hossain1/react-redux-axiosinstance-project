import React from "react";
import {
  useAddProductMutation,
  useGetAllProductsQuery,
} from "../redux/api/productApi";

const Products = () => {
  const { data, isError, isLoading, error } = useGetAllProductsQuery() || {};

  console.log(data);
  return (
    <div>
      <h4>Products</h4>
      <div>
        {isLoading ? (
          <p>Loading....</p>
        ) : isError ? (
          <div> {error?.message || error.error} </div>
        ) : (
          data?.allProduct?.map((product) => (
            <div key={product?._id}>
              <h4>{product?._id}</h4>
              <h4>{product?.title}</h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
