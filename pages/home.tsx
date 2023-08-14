import React from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import Link from "next/link";

export function HomePage() {
   return (
      <AdminLayout>
         <div className="bg-white w-full h-full  justify-center">
            <div className="flex flex-col bg-slate-200 items-center h-full w-[400px] m-auto pt-32 p-5">
               <h1 className="p-5 font-bold text-2xl">Admin</h1>

               <div className="flex-col flex">
                  <h2 className="mt-5 font-bold bg-slate-300 p-5">Clientes</h2>
                  <span className="flex gap-5">
                     <Link href="/clientes">
                        <button>Visualizar clientes</button>
                     </Link>
                     <Link href="/clientes/cadastro-clientes">
                        <button>Cadastros de clientes</button>
                     </Link>
                  </span>
               </div>

               <div className="flex-col flex gap-2">
                  <h2 className="mt-5 font-bold bg-slate-300 p-5">Pedidos</h2>
                  <span className="flex gap-5">
                     <Link href="/pedidos">
                        <button>Visualizar pedidos</button>
                     </Link>
                     <Link href="/pedidos/cadastro-pedidos">
                        <button>Cadastros de pedidos</button>
                     </Link>
                  </span>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}
export default HomePage;
