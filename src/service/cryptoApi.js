import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  // "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "Content-Type": "application/json",
  "x-access-token":
    "coinranking02807be1997d3825c4167f8940426506d73b7dea5a24f895",
};

const baseUrl = "https://api.coinranking.com/v2";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

// var options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/stats",
//   headers: {
//     "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//     "x-rapidapi-key": "22ea0a6822msh68f843487cd42d6p13c7c8jsn067fedebcdda",
//   },
// };
