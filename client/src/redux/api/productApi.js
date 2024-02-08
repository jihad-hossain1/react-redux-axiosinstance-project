import baseApi from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products/all-products",
      providesTags: ["products"],
    }),

    addProduct: builder.mutation({
      query: (product) => ({
        url: "/products/create",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["products"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery, useAddProductMutation } = productApi;
