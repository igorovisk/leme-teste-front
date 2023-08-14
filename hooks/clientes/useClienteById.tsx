import { useQuery } from "@tanstack/react-query";
import Api from "../../services/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { TypeCliente } from "../../types";

export function useClienteById(clientId: number) {
   const router = useRouter();

   async function getCliente(): Promise<TypeCliente> {
      try {
         const response = await Api.get(`clientes/${clientId}`);
         const cliente = response.data;
         return cliente;
      } catch (error) {
         router.push("/home");
         throw error;
      }
   }

   return useQuery(["cliente"], async () => await getCliente(), {
      onSuccess: (cliente: TypeCliente) => {
         return cliente;
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

export default useClienteById;
