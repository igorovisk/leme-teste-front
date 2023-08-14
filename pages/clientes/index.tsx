import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import useClientes from "../../hooks/clientes/useClientes";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TypeCliente } from "../../types";
import ClienteTable from "../../components/Tables/ClientesTable";
import Button from "../../components/Button/Button";
import Link from "next/link";

export default function IndexPage() {
   const { data: clientes, isFetching, isLoading } = useClientes();
   if (isFetching || isLoading) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }
   return (
      <AdminLayout>
         <div className="w-full h-full flex flex-col bg-slate-100 pt-10 ">
            <h1 className="font-bold justify-center flex text-2xl">
               Página de clientes
            </h1>
            <div>
               <ClienteTable clientes={clientes} />
               <div className=" mt-5 p-5">
                  <Link
                     href="/clientes/cadastro-clientes"
                     className="bg-green-400  text-white flex-nowrap p-4 rounded flex-1 items-center justify-center flex gap-2 w-fit font-bold hover:text-white hoverItem"
                     type="button"
                  >
                     Adicionar novo cliente
                  </Link>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}
