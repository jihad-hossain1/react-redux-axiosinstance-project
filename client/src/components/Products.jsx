import { useGetAllProductsQuery } from "../redux/api/productApi";

const Products = () => {
  const { data, isError, isLoading, error } = useGetAllProductsQuery() || {};

  return (
    <div style={{ border: "solid 1px red" }}>
      <h4>Products</h4>
      <div style={{ display: "flex", justifyItems: "center" }}>
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
