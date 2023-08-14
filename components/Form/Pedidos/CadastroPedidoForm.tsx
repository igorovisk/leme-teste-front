import React, { useState } from "react";
import { useRouter } from "next/router";
import "react-phone-number-input/style.css";
import usePostPedido from "../../../hooks/pedidos/usePostPedido";
import useClientes from "../../../hooks/clientes/useClientes";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TypeCliente } from "../../../types";
import { toast } from "react-toastify";

export function CadastroPedidoForm() {
   const router = useRouter();
   const { mutateAsync } = usePostPedido();
   const [produto, setProduto] = useState<string>("");
   const [valor, setValor] = useState<number>(0);
   const [data, setData] = useState<string>();
   const [pedido_status_id, setPedido_status_id] = useState(0);
   const [cliente, setCliente] = useState<TypeCliente>();

   const { data: clientes, isFetching, isLoading } = useClientes();
   if (isFetching || isLoading) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }
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
         pedido_status_id: pedido_status_id,
         cliente_id: Number(cliente.id),
         ativo: 0,
      };
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
                  value={data}
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
                  {clientes.map((cliente: TypeCliente) => {
                     return (
                        <option key={cliente.id} value={cliente.id}>
                           Id: {cliente.id} - Nome: {cliente.nome} - CPF:{" "}
                           {cliente.cpf}
                        </option>
                     );
                  })}
               </select>
            </label>
            <button
               className="text-xl text-white bg-green-400 hover:bg-green-500 p-4 rounded mt-10"
               onClick={handleRegisterPedido}
               type="submit"
            >
               Cadastrar
            </button>
         </span>
      </form>
   );
}

export default CadastroPedidoForm;
