import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/'
        }),
        getProduct: builder.query({
            query: id => `/${id}`
        })
    })
})

export const { useGetProductsQuery, useGetProductQuery } = apiSlice