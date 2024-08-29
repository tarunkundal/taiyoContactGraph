import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const staggeredBaseQuery = retry(
    fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
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
