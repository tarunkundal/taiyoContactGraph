import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const staggeredBaseQuery = retry(
    fetchBaseQuery({
        baseUrl: '/api',
        credentials: 'include',
        mode: 'cors',
    }),
    { maxRetries: 1 },
);

export const baseApi = createApi({
    reducerPath: 'base',
    baseQuery: staggeredBaseQuery,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    tagTypes: [],
    endpoints: () => ({}),
});
