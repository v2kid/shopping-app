import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  tagTypes: ['Cart'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonserver-zeta.vercel.app/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { categories: string , page : number, perpage : number }>({
      query: ({ categories, page, perpage }) => {
        const start = (page - 1) * perpage;
        const end = (page * perpage) ;
        return `products?_start=${start}&_end=${end}&categories=${categories}`;
      },
    }),
    getDetials: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),

    getCarts: builder.query<Product[], any>({
      query: () => {
        return `cart`
      },
      providesTags(result, error, variables) {
        if (result) {
          const final = [
            ...result.map(({ id }) => ({ type: 'Cart' as const })),
            { type: 'Cart' as const, id: 'LIST' }
          ]
          return final
        }
        return [{ type: 'Cart', id: 'LIST' }]
      }
    }),
    addtocart: builder.mutation<Product, Product>({
      query: (data) => {
        return {
         url: 'cart',
        method: 'POST',
        body: data
        }
      },
      invalidatesTags: (_result, _error, _id) => [{ type: 'Cart', id: 'LIST' }]
    }),
    deleteCartitem: builder.mutation<{}, string | any>({
      query(id) {
        return {
          url: `cart/${id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, _id) => [{ type: 'Cart', id: 'LIST' }]
    }),
    getSearch: builder.query<Product[], { keyword: string }>({
      query: (variables) => {
        const { keyword } = variables
        return `products?title_like=${keyword}`
        // return `heroes?keyword=${keyword}`
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetDetialsQuery , useGetCartsQuery ,useDeleteCartitemMutation , useAddtocartMutation , useGetSearchQuery} = productApi