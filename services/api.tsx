import axios from "axios";

export const api = axios.create({
   baseURL: "https://leme-teste-api.vercel.app/",
   timeout: 10000,
});
export default api;
