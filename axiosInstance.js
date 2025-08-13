import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Backend URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Allow cookies for refresh token
});

// Add access token automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
