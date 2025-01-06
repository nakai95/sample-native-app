import { NetworkException, WebApiException } from "@/domains/errors";
import { SESSION_STORAGE_KEY } from "@/domains/models/auth";
import axios, { AxiosError } from "axios";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const LOCALHOST = Platform.OS === "android" ? "10.0.2.2" : "127.0.0.1";
const API_BASE_URL = `http://${LOCALHOST}:8080`;
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.paramsSerializer = { indexes: null };
axios.interceptors.request.use(async (config) => {
  config.withCredentials = true;

  let token = null;

  if (Platform.OS === "web") {
    token = localStorage.getItem(SESSION_STORAGE_KEY);
  } else {
    token = await SecureStore.getItemAsync(SESSION_STORAGE_KEY);
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
axios.interceptors.response.use(null, (error: AxiosError) => {
  if (error.response) {
    throw new WebApiException(
      error.response.status,
      error.response.statusText,
      error.response.data
    );
  } else {
    throw new NetworkException(error.message);
  }
});

export default axios;
