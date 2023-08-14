import React from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import CadastroPedidoForm from "../../components/Form/Pedidos/CadastroPedidoForm";

export function CadastroPedidos() {
   return (
      <AdminLayout>
         <div className="w-full h-full flex flex-col bg-slate-100 pt-10 justify-center items-center">
            <h1 className="font-bold justify-center flex text-2xl">
               Cadastrar novo pedido
            </h1>
            <div className="max-w-5xl w-full flex justify-center items-center flex-col">
               <CadastroPedidoForm />
            </div>
         </div>
      </AdminLayout>
   );
}
export default CadastroPedidos;
