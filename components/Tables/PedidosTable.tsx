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
         <table className="min-w-full border-collapse block md:table mt-10">
            <thead className="block md:table-header-group">
               <tr className="border-b">
                  <th className="text-left p-2 md:table-cell">ID</th>
                  <th className="text-left p-2 md:table-cell">Produto</th>
                  <th className="text-left p-2 md:table-cell">Valor</th>
                  <th className="text-left p-2 md:table-cell">
                     Data do pedido
                  </th>
                  <th className="text-left p-2 md:table-cell">Ativo</th>
                  <th className="text-left p-2 md:table-cell">Id do Cliente</th>
                  <th className="text-left p-2 md:table-cell">
                     Status do Pedido
                  </th>
                  <th className="text-left p-2 md:table-cell">Imagens</th>
                  <th className="text-left p-2 md:table-cell bg-sky-200">
                     Ações
                  </th>
               </tr>
            </thead>
            <tbody className="block md:table-row-group">
               {pedidos.map((pedido) => (
                  <tr
                     key={pedido.id}
                     className="md:table-row border-b hover:bg-gray-100"
                  >
                     <td className="text-left p-2 md:table-cell">
                        {pedido.id}
                     </td>
                     <td className="text-left p-2 md:table-cell">
                        {pedido.produto}
                     </td>
                     <td className="text-left p-2 md:table-cell">
                        {pedido.valor}
                     </td>
                     <td className="text-left p-2 md:table-cell">
                        {new Date(pedido.data)?.toLocaleDateString()}
                     </td>
                     <td className="text-left p-2 md:table-cell">
                        {pedido.ativo === 1 ? "Sim" : "Não"}
                     </td>
                     <td className="text-left p-2 md:table-cell">
                        {pedido.cliente_id}
                     </td>
                     <td className="text-left p-2 md:table-cell">
                        {pedidoStatusId?.[pedido.pedido_status_id]}
                     </td>
                     <td className="text-left p-2 md:table-cell">imagens</td>

                     <td className="text-left p-2 md:table-cell ">
                        <div className="flex justify-center items-center">
                           <Link
                              href={`pedidos/${pedido.id}`}
                              className="mr-2 p-2 bg-sky-500 rounded hoverItem"
                           >
                              <AiFillEdit />
                           </Link>
                           <button
                              className="p-2 bg-red-500 rounded hoverItem "
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
   );
};

export default PedidosTable;
