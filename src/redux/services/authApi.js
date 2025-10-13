import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../../URL';
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // prepareHeaders: (headers, {getState}) => {
    //   const token = getState().auth?.user?.token; // Get token from Redux state
    //   console.log('Token----:', token);
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`);
    //   }
    //   headers.set('Content-Type', 'application/json');
    //   return headers;
    // },
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signUp: builder.mutation({
      query: body => ({
        url: 'auth/signup',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;