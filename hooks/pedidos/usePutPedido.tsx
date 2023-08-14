import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Api from "../../services/api";
import { toast } from "react-toastify";
import { TypePedido } from "../../types";

function usePutPedido() {
   const queryClient = useQueryClient();
   return useMutation(
      ["putPedido"],
      async (pedido: TypePedido): Promise<any> => {
         const response = await Api.put(
            `clientes/${pedido.cliente_id}/pedidos/${pedido.pedido_id}`,
            pedido
         );

         return response.data;
      },
      {
         onSuccess: async () => {
            await queryClient.invalidateQueries(["pedido"]);
            await queryClient.invalidateQueries(["pedidos"]);
            toast.success(`Routine sucessfully edited..`, {
               position: "top-right",
            });
         },
         onError: (error: any) => {
            console.log(error, "ERROR");
            toast.error(`${error.response.data}`);
         },
      }
   );
}

export default usePutPedido;
