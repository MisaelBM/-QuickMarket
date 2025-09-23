import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/backend/app", // ajuste conforme necessário
});

export default api;
