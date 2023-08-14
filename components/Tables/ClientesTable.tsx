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
   return (
      <div className="container px-4 mx-auto">
         <table className="min-w-full border-collapse block md:table mt-10">
            <thead className="block md:table-header-group">
               <tr className="border-b">
                  <th className="text-left p-2 md:table-cell">ID</th>
                  <th className="text-left p-2 md:table-cell">Nome</th>
                  <th className="text-left p-2 md:table-cell">CPF</th>
                  <th className="text-left p-2 md:table-cell">
                     Data de nascimento
                  </th>
                  <th className="text-left p-2 md:table-cell">Tel</th>
                  <th className="text-left p-2 md:table-cell">Ativo</th>
                  <th className="text-left p-2 md:table-cell bg-sky-200">
                     Ações
                  </th>
               </tr>
            </thead>
            <tbody className="block md:table-row-group">
               {clientes.map((cliente) => (
                  <tr
                     key={cliente.id}
                     className="md:table-row border-b hover:bg-gray-100"
                  >
                     <td className="text-left p-2 md:table-cell">
                        {cliente.id}
                     </td>
                     <td className="text-left p-2 md:table-cell">
                        {cliente.nome}
                     </td>
                     <td className="text-left p-2 md:table-cell">
                        {cliente.cpf}
                     </td>
                     <td className="text-left p-2 md:table-cell">
                        {new Date(cliente.data_nasc)?.toLocaleDateString()}
                     </td>
                     <td className="text-left p-2 md:table-cell">
                        {cliente?.telefone}
                     </td>
                     <td className="text-left p-2 md:table-cell">
                        {cliente.ativo === 1 ? "Sim" : "Não"}
                     </td>
                     <td className="text-left p-2 md:table-cell ">
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
   );
};

export default ClienteTable;
