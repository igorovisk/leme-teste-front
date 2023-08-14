import { useQuery } from "@tanstack/react-query";
import Api from "../../services/api";
import { toast } from "react-toastify";
import { TypePedido } from "../../types";
import { useRouter } from "next/router";

export function usePedidoById(pedidoId: number) {
   const router = useRouter();

   async function getPedido(): Promise<TypePedido> {
      try {
         console.log(pedidoId, "pedidoId no hook");
         const response = await Api.get(`/pedidos/${pedidoId}`);
         const pedido = response.data;
         return pedido;
      } catch (error) {
         router.push("/home");
         throw error;
      }
   }

   return useQuery(["pedido"], async () => await getPedido(), {
      onSuccess: (pedido: TypePedido) => {
         return pedido;
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

export default usePedidoById;
