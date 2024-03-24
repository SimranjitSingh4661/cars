import axios from "axios";
import { storage } from "src/syncStorage";

const api = axios.create({
  baseURL: "https://dummyjson.com", // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests (in milliseconds)
});

const handleApiError = (error) => {
  console.log("here error", error);
  if (error.response) {
    switch (error.axiosError?.status) {
      case 401: {
        // handle your unauthorized error here
        return { ...error.response, error: error.message };
      }
      default: {
        if (!error) {
          return { error: "Unknown error" };
        }

        if (error.response && error.response.data.error && !error.message) {
          return {
            ...error.response,
            error: error.response.data.error || "Network Error",
          };
        }

        if (error.response && error.response.data) {
          return error.response.data;
        }

        return { error: `${error.message}` };
      }
    }
  }
  return { error: error.message };
};

// Axios interceptor to add Authorization header before each request
api.interceptors.request.use((config) => {
  // Add the Authorization header if a token is present
  const userData = getItem("userData");
  if (userData) {
    config.headers.Authorization = `Bearer ${userData.token}`;
  }
  return config;
});

export const get = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const post = async (endpoint, data = {}, options) => {
  try {
    const response = await api.post(endpoint, data, options);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const put = async (endpoint, data = {}, options) => {
  try {
    const response = await api.put(endpoint, data, options);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const remove = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const setItem = (key, value) => {
  storage.set(key, JSON.stringify(value));
};

export const getItem = (key) => {
  const jsonUser = storage.getString(key);
  if (jsonUser) {
    try {
      const userObject = JSON.parse(jsonUser);
      return userObject;
    } catch (error) {
      console.log("Error parsing user data:", error);
      return null;
    }
  } else {
    console.log("No data found for the key:", key);
    return null;
  }
};

export const clearAllItem = () => storage.clearAll();
