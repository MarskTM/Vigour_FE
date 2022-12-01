import { View, Text } from "react-native";
import React from "react";
import axios from "axios";
import qs from "qs";
import {getData} from '../Store';

const axiosClient = axios.create({
  baseURL: "http://tuanhung.site:19000/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) =>
    qs.stringify(params, { encodeValuesOnly: false }),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  let token;
  await getData("token").then((res) => {
    token = res;
  });
  if (token) {
    config.Headers = {
      authorization: token,
    };
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data.success) {
      return response.data;
    } else {
      console.log(response.data.message);
      return null;
    }
  },
  (error) => {
    // Handle errors
    console.error(error.response);
    return null;
  }
);

export default axiosClient;
