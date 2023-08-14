import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "react-phone-number-input/style.css";
import usePostPedido from "../../../hooks/pedidos/usePostPedido";
import useClientes from "../../../hooks/clientes/useClientes";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TypeCliente } from "../../../types";
import { toast } from "react-toastify";
import usePutPedido from "../../../hooks/pedidos/usePutPedido";

interface CadastroPedidoFormProps {
   pedido: {
      id?: number;
      produto: string;
      valor: number;
      data: Date;
      ativo: number;
      cliente_id: number;
      pedido_status_id: number;
   };
}

export function EditPedidoForm({ pedido }: CadastroPedidoFormProps) {
   const router = useRouter();
   const { mutateAsync } = usePutPedido();
   const { data: clientes, isFetching, isLoading } = useClientes();
   const [produto, setProduto] = useState<string>(pedido.produto);
   const [valor, setValor] = useState<number>(pedido.valor);
   const [data, setData] = useState(pedido.data ? new Date(pedido.data) : null);
   const [ativo, setAtivo] = useState<number>(pedido.ativo);
   const [pedido_status_id, setPedido_status_id] = useState(
      pedido.pedido_status_id
   );
   const [cliente, setCliente] = useState<TypeCliente>(
      clientes?.find((client: TypeCliente) => client.id === pedido.cliente_id)
   );

   useEffect(() => {
      if (isFetching || isLoading) {
         return;
      }
      setProduto(pedido.produto);
      setValor(pedido.valor);
      setData(pedido.data ? new Date(pedido.data) : null);
      setPedido_status_id(pedido.pedido_status_id);
      const selectedCliente = clientes?.find(
         (c: TypeCliente) => Number(c.id) === Number(pedido.cliente_id)
      );
      setCliente(selectedCliente);
      setAtivo(pedido.ativo);
   }, [pedido, clientes, isFetching, isLoading]);
   const handleRegisterPedido = async (e: any) => {
      e.preventDefault();
      if (!cliente) {
         return toast.error("Por favor, selecione um cliente");
      }
      if (!produto) {
         return toast.error("Por favor, escreva o nome de um produto");
      }
      if (!data) {
         return toast.error("Por favor, seleciona uma data ");
      }
      if (!valor) {
         return toast.error("Por favor, escreva o valor do pedido");
      }
      const payload = {
         produto,
         valor: Number(valor),
         data: new Date(data),
         pedido_status_id: Number(pedido_status_id),
         cliente_id: Number(cliente.id),
         ativo: Number(ativo),
         pedido_id: Number(pedido.id),
      };
      console.log(payload, "payload");
      await mutateAsync(payload);
      router.push("/pedidos");
   };

   return (
      <form className="text-black mt-10 py-10 w-full h-full p-10 ">
         <span className="flex flex-col gap-5 w-full p-4 rounded h-full">
            <label className="flex flex-col text-left text-zinc-500">
               Produto
               <input
                  type={"text"}
                  placeholder="Ex: Televisão"
                  className="signFormInput rounded "
                  onChange={(e: any) => setProduto(e.target.value)}
                  value={produto}
                  required
               />
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               Valor
               <input
                  type={"number"}
                  min={0}
                  maxLength={10}
                  placeholder="1200.20"
                  className="signFormInput rounded "
                  onChange={(e: any) => setValor(e.target.value)}
                  value={valor}
                  required
               />
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               Data do Pedido
               <input
                  type={"date"}
                  placeholder="Ex: 14/03/1994"
                  className="signFormInput rounded "
                  onChange={(e: any) => setData(e.target.value)}
                  value={data ? data.toISOString().substr(0, 10) : ""}
                  required
               />
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               Status do Pedido
               <select
                  className={`signFormInput rounded`}
                  name="ativo"
                  id="ativo"
                  value={pedido_status_id}
                  onChange={(ev: React.ChangeEvent<HTMLSelectElement>) =>
                     setPedido_status_id(Number(ev.target.value))
                  }
               >
                  <option value={1}>Solicitado</option>
                  <option value={2}>Concluído</option>
                  <option value={3}>Cancelado</option>
               </select>
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               Cliente
               <select
                  className={`signFormInput rounded`}
                  name="cliente"
                  id="cliente"
                  value={cliente?.id}
                  onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => {
                     const selectedCliente = clientes.find(
                        (c: TypeCliente) =>
                           Number(c.id) === Number(ev.target.value)
                     );
                     setCliente(selectedCliente);
                  }}
               >
                  <option value={""}>Selecionar</option>
                  {clientes?.map((cliente: TypeCliente) => {
                     return (
                        <option key={cliente.id} value={cliente.id}>
                           Id: {cliente.id} - Nome: {cliente.nome} - CPF:{" "}
                           {cliente.cpf}
                        </option>
                     );
                  })}
               </select>
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               Ativo
               <select
                  className={`signFormInput rounded`}
                  name="ativo"
                  id="ativo"
                  value={ativo}
                  onChange={(ev: React.ChangeEvent<HTMLSelectElement>) =>
                     setAtivo(Number(ev.target.value))
                  }
               >
                  <option value={1}>Ativo</option>
                  <option value={0}>Inativo</option>
               </select>
            </label>
            <button
               className="text-xl text-white bg-green-400 hover:bg-green-500 p-4 rounded mt-10"
               onClick={handleRegisterPedido}
               type="submit"
            >
               Editar pedido
            </button>
         </span>
      </form>
   );
}

export default EditPedidoForm;
