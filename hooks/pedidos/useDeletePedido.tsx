import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Api from "../../services/api";
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
   pedido_id: number;
   pedido_status_id: number;
   pedido_imagens_id?: number;
};
function useDeletePedido() {
   const queryClient = useQueryClient();
   return useMutation(
      ["deletePedido"],
      async (pedido: PedidoPayload): Promise<PedidoResponse> => {
         const response = await Api.patch(
            `clientes/${pedido.cliente_id}/pedidos/${pedido.id}`
         );

         toast.success(`Pedido setado para inativo ..`, {
            position: "top-right",
         });
         console.log(response, "response");
         return response.data;
      },
      {
         onSuccess: async () => {
            await queryClient.invalidateQueries(["pedidos"]);
         },
         onError: (error: any) => {
            console.log(error, "ERROR");
            toast.error(`${error.response.data}`);
         },
      }
   );
}

export default useDeletePedido;
