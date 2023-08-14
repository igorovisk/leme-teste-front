import axios from "axios";

export const api = axios.create({
   baseURL: "http://localhost:3005/",
   timeout: 10000,
});
export default api;
