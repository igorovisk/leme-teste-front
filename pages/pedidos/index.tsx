// pages/pedidos/index.tsx

import React from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";
import PedidosTable from "../../components/Tables/PedidosTable";
import usePedidos from "../../hooks/pedidos/usePedidos";
import useExportPedidosCSV from "../../hooks/pedidos/useExportPedidosCSV";

export function IndexPage() {
   const { data: pedidos, isFetching, isLoading } = usePedidos();
   const { getCSVPedidos } = useExportPedidosCSV();

   const handleExportCSV = async () => {
      try {
         const csvData = await getCSVPedidos();
         const blob = new Blob([csvData], { type: "text/csv" });

         const url = URL.createObjectURL(blob);

         const a = document.createElement("a");
         a.href = url;
         a.download = "pedidos.csv";
         a.click();

         URL.revokeObjectURL(url);
      } catch (error) {
         console.error("Error exporting CSV:", error);
      }
   };

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
                     onClick={handleExportCSV}
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
