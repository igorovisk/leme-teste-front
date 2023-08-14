import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/router";
import AdminLayout from "../../../components/Layout/AdminLayout";
import EditPedidoForm from "../../../components/Form/Pedidos/EditPedidoForm";
import usePedidoById from "../../../hooks/pedidos/usePedidoById";

function PedidoIdIndexPage() {
   const router = useRouter();
   const { pedidoId } = router.query;
   const { data: pedido, isFetching } = usePedidoById(Number(pedidoId));
   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }

   console.log(pedido, "pedido na index");
   return (
      <AdminLayout>
         <div className="w-full h-full flex flex-col bg-slate-100 pt-10 justify-center items-center">
            <h1 className="font-bold justify-center flex text-2xl">
               Editar pedido
            </h1>
            <div className="max-w-5xl w-full flex justify-center items-center flex-col">
               <EditPedidoForm pedido={pedido} />;
            </div>
         </div>
      </AdminLayout>
   );
}
export default PedidoIdIndexPage;
