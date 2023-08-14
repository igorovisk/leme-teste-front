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

type ClientePayload = {
   id?: number;
   nome?: string;
   cpf?: string;
   data_nasc?: Date;
   telefone: string;
   ativo: number;
};

function usePutCliente() {
   const queryClient = useQueryClient();
   return useMutation(
      ["putCliente"],
      async (cliente: ClientePayload): Promise<ClienteResponse> => {
         const response = await Api.put(`clientes/${cliente.id}`, cliente);
         return response.data;
      },
      {
         onSuccess: async () => {
            await queryClient.invalidateQueries(["clientes"]);
            await queryClient.invalidateQueries(["cliente"]);
            toast.success(`Cliente sucessfully edited..`, {
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

export default usePutCliente;
