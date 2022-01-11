import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const __prod__ = process.env.NODE_ENV && process.env.NODE_ENV === "production";

const baseUrl = __prod__ ? process.env.REACT_APP_BASE_URL : 'http://localhost:4000';

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