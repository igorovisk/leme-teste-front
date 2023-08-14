import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import useClientes from "../../hooks/clientes/useClientes";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TypeCliente } from "../../types";
import Button from "../../components/Button/Button";
import Link from "next/link";
import PedidosTable from "../../components/Tables/PedidosTable";
import usePedidos from "../../hooks/pedidos/usePedidos";

export function IndexPage() {
   const { data: pedidos, isFetching, isLoading } = usePedidos();
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
               Página de pedidos
            </h1>
            <div>
               <PedidosTable pedidos={pedidos} />
               <div className=" mt-5 p-5 flex gap-4 flex-col sm:flex-row">
                  <Link
                     href="/pedidos/cadastro-pedidos"
                     className="bg-green-400  text-white flex-nowrap p-4 rounded flex-1 items-center justify-center flex gap-2 max-w-[400px] text-center font-bold hover:text-white hoverItem"
                     type="button"
                  >
                     Adicionar novo pedido
                  </Link>
                  <button
                     className="bg-green-400  text-white flex-nowrap p-4 rounded flex-1 items-center justify-center flex gap-2 max-w-[400px] text-center font-bold hover:text-white hoverItem"
                     type="button"
                     onClick={() => console.log("exporting")}
                  >
                     Exportar pedidos em formato CSV
                  </button>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}
export default IndexPage;
