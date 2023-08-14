import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useClienteById } from "../../../hooks/clientes/useClienteById";
import EditClienteForm from "../../../components/Form/Cliente/EditClienteForm";
import { useRouter } from "next/router";
import AdminLayout from "../../../components/Layout/AdminLayout";

export default function ClienteIdIndexPage() {
   const router = useRouter();
   const { clienteId } = router.query;
   const { data: cliente, isFetching } = useClienteById(Number(clienteId));

   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }
   const cleanCpf = (value: string) => value.replace(/[.-]/g, "");
   cliente.cpf = cleanCpf(cliente.cpf);
   return (
      <AdminLayout>
         <div className="w-full h-full flex flex-col bg-slate-100 pt-10 justify-center items-center">
            <h1 className="font-bold justify-center flex text-2xl">
               Editar cliente
            </h1>
            <div className="max-w-5xl w-full flex justify-center items-center flex-col">
               <EditClienteForm cliente={cliente} />;
            </div>
         </div>
      </AdminLayout>
   );
}
