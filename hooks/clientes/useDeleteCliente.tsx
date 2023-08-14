import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Api from "../../services/api";
import { toast } from "react-toastify";

type ClienteResponse = {
   id: number;
   nome: string;
   cpf: string;
   data_nasc: Date;
   telefone: string;
   ativo: number;
   createdAt?: Date;
   updatedAt?: Date;
};

function useDeleteClient() {
   const queryClient = useQueryClient();
   return useMutation(
      ["deleteCliente"],
      async (clientId: number): Promise<ClienteResponse> => {
         const response = await Api.patch(`clientes/${clientId}/`);
         toast.success(`Cliente setado para inativo`, {
            position: "top-right",
         });
         return response.data;
      },
      {
         onSuccess: async () => {
            await queryClient.invalidateQueries(["clientes"]);
         },
         onError: (error: any) => {
            console.log(error, "ERROR");
            toast.error(`${error.response.data}`);
         },
      }
   );
}

export default useDeleteClient;
