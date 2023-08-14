import { useQuery } from "@tanstack/react-query";
import Api from "../../services/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { TypePedido } from "../../types";

export function useClientes() {
   async function getClientes(): Promise<TypePedido | null> {
      try {
         const response = await Api.get("/clientes");
         const clientes = response.data;

         return clientes;
      } catch (error) {
         router.push("/logout");
         throw error;
      }
   }

   const router = useRouter();

   return useQuery(["clientes"], async () => await getClientes(), {
      onSuccess: (clientes: []) => {
         return clientes;
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

export default useClientes;
