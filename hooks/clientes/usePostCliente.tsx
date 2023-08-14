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
};

function usePostCliente() {
   const queryClient = useQueryClient();
   return useMutation(
      ["postCliente"],
      async (cliente: ClientePayload): Promise<ClienteResponse> => {
         const response = await Api.post(`clientes`, cliente);

         toast.success(`New cliente added..`, {
            position: "top-right",
         });
         return response.data;
      },
      {
         onSuccess: async () => {
            await queryClient.invalidateQueries(["clientes"]);
         },
         onError: (error: any) => {
            toast.error(`${error?.response?.data.message}`);
         },
      }
   );
}

export default usePostCliente;
