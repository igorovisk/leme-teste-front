import Link from "next/link";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import useDeleteClient from "../../hooks/clientes/useDeleteCliente";
import { TypeCliente } from "../../types";

interface Props {
   clientes: TypeCliente[];
}

const ClienteTable: React.FC<Props> = ({ clientes }) => {
   const { mutateAsync } = useDeleteClient();

   const handleDeleteCliente = async (clienteId: number) => {
      await mutateAsync(clienteId);
   };
   //Escondi as tables head menos importantes para ser possível ser minimamente usável em mobile, visto que admins são mais focados em Desktop
   return (
      <div className="container px-4 mx-auto">
         <div className="overflow-x-auto">
            <table className="w-full table-auto mt-10">
               <thead>
                  <tr className="border-b">
                     <th className="p-2">ID</th>
                     <th className="p-2">Nome</th>
                     <th className="p-2 hidden md:table-cell">CPF</th>
                     <th className="p-2 hidden md:table-cell">
                        Data de nascimento
                     </th>
                     <th className="p-2 hidden md:table-cell">Tel</th>
                     <th className="p-2">Ativo</th>
                     <th className="p-2 bg-sky-200">Ações</th>
                  </tr>
               </thead>
               <tbody>
                  {clientes.map((cliente) => (
                     <tr
                        key={cliente.id}
                        className="border-b hover:bg-gray-100"
                     >
                        <td className="p-2">{cliente.id}</td>
                        <td className="p-2">{cliente.nome}</td>
                        <td className="p-2 hidden md:table-cell">
                           {cliente.cpf}
                        </td>
                        <td className="p-2 hidden md:table-cell">
                           {new Date(cliente.data_nasc)?.toLocaleDateString()}
                        </td>
                        <td className="p-2 hidden md:table-cell">
                           {cliente?.telefone}
                        </td>
                        <td className="p-2">
                           {cliente.ativo === 1 ? "Sim" : "Não"}
                        </td>
                        <td className="p-2">
                           <div className="flex justify-center items-center">
                              <Link
                                 href={`clientes/${cliente.id}`}
                                 className="mr-2 p-2 bg-sky-500 rounded hoverItem"
                              >
                                 <AiFillEdit />
                              </Link>
                              <button
                                 className="p-2 bg-red-500 rounded hoverItem "
                                 onClick={() => handleDeleteCliente(cliente.id)}
                              >
                                 <AiFillDelete />
                              </button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ClienteTable;
