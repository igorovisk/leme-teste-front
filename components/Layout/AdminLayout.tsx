import React from "react";
import { IoIosCreate } from "react-icons/io";
import UserMenuButton from "../Button/UserMenuButton";
import { GoSignOut } from "react-icons/go";
import { useRouter } from "next/router";
import { TypeCliente } from "../../types";

type AdminLayoutProps = {
   children: any;
   clientes?: TypeCliente[];
};
export function AdminLayout({ children, clientes }: AdminLayoutProps) {
   const router = useRouter();
   return (
      <main className="flex bg-slate-900 pt-24 h-full ">
         <div
            className={`hidden 
               md:grid
             w-[300px] top-0 left-0 p-4 text-white relative  border-violet-800 border-r-2 `}
         >
            <div className="grid ">
               <div className="self-start">
                  <ul className="flex flex-col items-start gap-2 pt-10 fixed ">
                     <li>
                        <UserMenuButton
                           path={`/clientes`}
                           active={router.pathname === "/clientes"}
                        >
                           <IoIosCreate />
                           Clientes
                        </UserMenuButton>
                     </li>
                     <li>
                        <UserMenuButton
                           path={`/pedidos`}
                           active={router.pathname === "/pedidos"}
                        >
                           <IoIosCreate />
                           Pedidos
                        </UserMenuButton>
                     </li>

                     <hr className="flex h-2 border-violet-800 mt-5 w-[50%] justify-start self-start" />
                  </ul>
               </div>
            </div>
         </div>
         <div className="flex justify-center w-full min-h-[100vh]  ">
            {children}
         </div>
      </main>
   );
}

export default AdminLayout;
