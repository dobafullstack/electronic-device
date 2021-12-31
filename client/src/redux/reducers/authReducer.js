import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_BASE_URL;

const createRequest = (url, headers) => ({url, headers})

export const authReducer = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getMyUser: builder.query({
            query: (token) =>
                createRequest(`/auth`, {
                    authorization: `Bearer ${token}`,
                }),
        }),
    }),
});

export const { useGetMyUserQuery } = authReducer;