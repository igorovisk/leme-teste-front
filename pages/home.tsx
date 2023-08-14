import React from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import Link from "next/link";
import { AiFillEye, AiFillFileAdd, AiOutlineUserAdd } from "react-icons/ai";

export function HomePage() {
   return (
      <AdminLayout>
         <div className="w-full justify-center bg-slate-200 rounded">
            <div className="flex flex-col items-center sm:w-[700px] m-auto pt-10 p-5 gap-5">
               <h1 className="p-5 font-bold text-4xl bg-slate-100 rounded">
                  Gerenciar
               </h1>

               <div className="flex-col flex rounded bg-white shadow-md p-10">
                  <h2 className="mt-5 font-bold bg-slate-100 p-5 text-xl text-center rounded-t">
                     Clientes
                  </h2>
                  <span className="flex gap-5 mt-2 items-center justify-center p-5">
                     <Link
                        href="/clientes"
                        className="flex gap-2 items-center justify-center bg-violet-600 p-3 rounded hover:bg-violet-500 hoverItem text-white font-bold"
                     >
                        <AiFillEye />
                        Visualizar
                     </Link>
                     <span className="text-gray-400">-</span>
                     <Link
                        href="/clientes/cadastro-clientes"
                        className="flex gap-2 items-center justify-center bg-violet-600 p-3 rounded hover:bg-violet-500 hoverItem text-white font-bold"
                     >
                        <AiOutlineUserAdd />
                        Cadastro
                     </Link>
                  </span>
               </div>

               <div className="flex-col flex rounded bg-white shadow-md p-10">
                  <h2 className="mt-5 font-bold bg-slate-100 p-5 text-xl text-center rounded-t">
                     Pedidos
                  </h2>
                  <span className="flex gap-5 mt-2 items-center justify-center p-5">
                     <Link
                        href="/pedidos"
                        className="flex gap-2 items-center justify-center bg-violet-600 p-3 rounded hover:bg-violet-500 hoverItem text-white font-bold"
                     >
                        <AiFillEye />
                        Visualizar
                     </Link>
                     <span className="text-gray-400">-</span>
                     <Link
                        href="/pedidos/cadastro-pedidos"
                        className="flex gap-2 items-center justify-center bg-violet-600 p-3 rounded hover:bg-violet-500 hoverItem text-white font-bold"
                     >
                        <AiFillFileAdd />
                        Cadastro
                     </Link>
                  </span>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}
export default HomePage;
