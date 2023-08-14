import axios from "axios";

export const api = axios.create({
   baseURL: "https://leme-teste-api.vercel.app/",
   // baseURL: "http://localhost:3005",
   timeout: 10000,
});
export default api;
