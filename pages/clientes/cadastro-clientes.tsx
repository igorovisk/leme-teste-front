import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import CadastroClienteForm from "../../components/Form/Cliente/CadastroClienteForm";

export function CadastroClientes() {
   return (
      <AdminLayout>
         <div className="w-full h-full flex flex-col bg-slate-100 pt-10 justify-center items-center">
            <h1 className="font-bold justify-center flex text-2xl">
               Cadastrar novo cliente
            </h1>
            <div className="max-w-5xl w-full flex justify-center items-center flex-col">
               <CadastroClienteForm />
            </div>
         </div>
      </AdminLayout>
   );
}
export default CadastroClientes;
