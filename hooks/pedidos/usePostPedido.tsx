import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Api from "../../services/api";
import useCliente from "../clientes/useClienteById";
import { toast } from "react-toastify";

type PedidoResponse = {
   id?: number;
   produto: string;
   valor: number;
   data: Date;
   ativo: number;
   cliente_id: number;
   pedido_id: number;
   pedido_status_id: number;
   pedido_imagens_id?: number;
};

type PedidoPayload = {
   id?: number;
   produto: string;
   valor: number;
   data: Date;
   ativo: number;
   cliente_id: number;
   pedido_status_id: number;
};

function usePostPedido() {
   const queryClient = useQueryClient();
   return useMutation(
      ["postPedido"],
      async (pedido: PedidoPayload): Promise<PedidoResponse> => {
         console.log(pedido, "pedido");
         const response = await Api.post(
            `clientes/${pedido.cliente_id}/pedidos`,
            pedido
         );

         toast.success(`New pedido added..`, {
            position: "top-right",
         });
         return response.data;
      },
      {
         onSuccess: async (response) => {
            await queryClient.invalidateQueries(["pedidos"]);
            toast.success(`${response.data}`);
         },
         onError: (error: any) => {
            return toast.error(`${error?.response?.data.message}`);
         },
      }
   );
}

export default usePostPedido;
