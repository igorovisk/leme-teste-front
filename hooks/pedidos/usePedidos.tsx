import { useQuery } from "@tanstack/react-query";
import Api from "../../services/api";
import { toast } from "react-toastify";

export function usePedidos() {
   async function getPedidos(): Promise<[] | null> {
      try {
         const response = await Api.get("/pedidos");
         const pedidos = response.data;
         return pedidos;
      } catch (error) {
         throw error;
      }
   }

   return useQuery(["pedidos"], async () => await getPedidos(), {
      onSuccess: (pedidos: []) => {
         return pedidos;
      },
      onError: (error: any) => {
         toast.error(error.response.data.error, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
         });
      },
      retry: true,
   });
}

export default usePedidos;
