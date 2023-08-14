import { useQuery } from "@tanstack/react-query";
import Api from "../../services/api";
import { toast } from "react-toastify";

export function useExportPedidosCSV() {
   async function getPedidosCSV(): Promise<Blob | null> {
      try {
         const response = await Api.get("/pedidos/exportcsv", {
            responseType: "blob",
         });

         return response.data;
      } catch (error) {
         throw error;
      }
   }

   return useQuery(["exportPedidos"], async () => await getPedidosCSV(), {
      onSuccess: (pedidoCSV: []) => {
         return pedidoCSV;
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

export default useExportPedidosCSV;
