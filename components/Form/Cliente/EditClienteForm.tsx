import React, { useState } from "react";
import usePutCliente from "../../../hooks/clientes/usePutCliente";
import PhoneInputWithCountry from "react-phone-number-input";
import { useRouter } from "next/router";
import "react-phone-number-input/style.css";

interface CadastroClienteFormProps {
   cliente: {
      id?: number;
      nome: string;
      cpf: string;
      data_nasc: Date;
      telefone: string;
      ativo: number;
   };
}

export function CadastroClienteForm({ cliente }: CadastroClienteFormProps) {
   const router = useRouter();
   const { mutateAsync } = usePutCliente();
   const [nome, setNome] = useState(cliente.nome || "");
   const [cpf, setCpf] = useState(cliente.cpf || "");
   const [data_nasc, setData_Nasc] = useState(
      cliente.data_nasc ? new Date(cliente.data_nasc) : null
   );
   const [telefone, setTelefone] = useState(cliente.telefone || "");
   const [ativo, setAtivo] = useState(Number(cliente.ativo));

   const handleEditCliente = async (e: React.FormEvent) => {
      e.preventDefault();
      const payload = {
         id: cliente.id,
         nome,
         cpf,
         data_nasc: data_nasc ? new Date(data_nasc) : null,
         telefone,
         ativo,
      };

      await mutateAsync(payload);
      router.push("/clientes");
   };

   return (
      <form className="text-black mt-10 py-10 w-full h-full p-10 bg-slate-200">
         <span className="flex flex-col gap-5 w-full p-4 rounded h-full">
            <label className="flex flex-col text-left text-zinc-500">
               Nome
               <input
                  type={"text"}
                  placeholder="Ex: Adriano"
                  className="signFormInput rounded "
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setNome(e.target.value)
                  }
                  value={nome}
                  required
               />
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               CPF
               <input
                  type={"text"}
                  placeholder="Ex: 04269650940"
                  className="signFormInput rounded "
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setCpf(e.target.value)
                  }
                  value={cpf}
                  required
               />
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               Data de Nascimento
               <input
                  type="date"
                  placeholder="Ex: 14/03/1994"
                  className="signFormInput rounded"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                     setData_Nasc(new Date(e.target.value))
                  }
                  value={data_nasc ? data_nasc.toISOString().substr(0, 10) : ""}
                  required
               />
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               Telefone
               <PhoneInputWithCountry
                  name="telefone"
                  defaultCountry="BR"
                  placeholder="Ex: 45999734751"
                  className="signFormInput rounded "
                  onChange={(value) => setTelefone(value || "")}
                  value={telefone}
                  rules={{ required: false }}
               />
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
               onClick={handleEditCliente}
               type="submit"
            >
               Editar
            </button>
         </span>
      </form>
   );
}

export default CadastroClienteForm;
