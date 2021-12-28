import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const headers = {
    "authorization": `Bearer ${localStorage.getItem('access_token')}`
};

const baseUrl = "http://localhost:4000";

const createRequest = (url) => ({url, headers})

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