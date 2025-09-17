import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server, config, formDataConfig } from "../../constants/axiosInstance";
import {config, formDataConfig } from "../../constants/config"

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${server}/api/v1`,
    prepareHeaders: (headers) => {
      // Add default JSON header if not present
      if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json");
      return headers;
    },
    credentials: "include", // include cookies automatically
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // Register
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
        headers: formDataConfig.headers,
      }),
      invalidatesTags: ["User"],
    }),

    // Login
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["User"],
    }),

    // Load user
    getUser: builder.query({
      query: () => "/profile",
      providesTags: ["User"],
    }),

    // Logout
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),

    // Update profile
    updateProfile: builder.mutation({
      query: (userData) => ({
        url: "/profile/update",
        method: "PUT",
        body: userData,
        headers: formDataConfig.headers,
      }),
      invalidatesTags: ["User"],
    }),

    // Update password
    updatePassword: builder.mutation({
      query: (formData) => ({
        url: "/password/update",
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),

    // Forgot password
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/password/forgot",
        method: "POST",
        body: email,
      }),
    }),

    // Reset password
    resetPassword: builder.mutation({
      query: ({ token, userData }) => ({
        url: `/reset/${token}`,
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserQuery,
  useLogoutUserMutation,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = userApi;
