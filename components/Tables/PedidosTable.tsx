import Link from "next/link";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import useDeletePedido from "../../hooks/pedidos/useDeletePedido";
import { TypePedido } from "../../types";

interface Props {
   pedidos: TypePedido[];
}

const PedidosTable: React.FC<Props> = ({ pedidos }) => {
   const { mutateAsync } = useDeletePedido();

   const handleDeletePedido = async (pedido: TypePedido) => {
      await mutateAsync(pedido);
   };

   const pedidoStatusId = ["Solicitado", "Concluído", "Cancelado"];

   return (
      <div className="container px-4 mx-auto">
         <div className="overflow-x-auto">
            <table className="w-full table-auto mt-10">
               <thead>
                  <tr className="border-b">
                     <th className="p-2">ID</th>
                     <th className="p-2">Produto</th>
                     <th className="p-2">Valor</th>
                     <th className="p-2 hidden md:table-cell">
                        Data do pedido
                     </th>
                     <th className="p-2">Ativo</th>
                     <th className="p-2 hidden md:table-cell">Id do Cliente</th>
                     <th className="p-2 hidden md:table-cell">
                        Status do Pedido
                     </th>
                     <th className="p-2 hidden md:table-cell">Imagens</th>
                     <th className="p-2 bg-sky-200">Ações</th>
                  </tr>
               </thead>
               <tbody>
                  {pedidos.map((pedido) => (
                     <tr key={pedido.id} className="border-b hover:bg-gray-100">
                        <td className="p-2">{pedido.id}</td>
                        <td className="p-2">{pedido.produto}</td>
                        <td className="p-2">{pedido.valor}</td>
                        <td className="p-2 hidden md:table-cell">
                           {new Date(pedido.data)?.toLocaleDateString()}
                        </td>
                        <td className="p-2">
                           {pedido.ativo === 1 ? "Sim" : "Não"}
                        </td>
                        <td className="p-2 hidden md:table-cell">
                           {pedido.cliente_id}
                        </td>
                        <td className="p-2 hidden md:table-cell">
                           {pedidoStatusId?.[pedido.pedido_status_id]}
                        </td>
                        <td className="p-2 hidden md:table-cell">imagens</td>
                        <td className="p-2">
                           <div className="flex justify-center items-center">
                              <Link
                                 href={`pedidos/${pedido.id}`}
                                 className="mr-2 p-2 bg-sky-500 rounded hoverItem"
                              >
                                 <AiFillEdit />
                              </Link>
                              <button
                                 className="p-2 bg-red-500 rounded hoverItem"
                                 onClick={() => handleDeletePedido(pedido)}
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

export default PedidosTable;
