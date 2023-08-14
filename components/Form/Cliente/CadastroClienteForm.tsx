import React, { useState } from "react";
import usePostCliente from "../../../hooks/clientes/usePostCliente";
import PhoneInputWithCountry from "react-phone-number-input";
import { useRouter } from "next/router";
import "react-phone-number-input/style.css";

export function CadastroClienteForm() {
   const router = useRouter();
   const { mutateAsync } = usePostCliente();
   const [nome, setNome] = useState("");
   const [cpf, setCpf] = useState("");
   const [data_nasc, setData_Nasc] = useState("");
   const [telefone, setTelefone] = useState("");

   const handleRegisterCliente = async (e: any) => {
      e.preventDefault();
      const payload = {
         nome,
         cpf,
         data_nasc: new Date(data_nasc),
         telefone,
      };
      await mutateAsync(payload);
      router.push("/clientes");
   };

   return (
      <form className="text-black mt-10 py-10 w-full h-full p-10 ">
         <span className="flex flex-col gap-5 w-full p-4 rounded h-full">
            <label className="flex flex-col text-left text-zinc-500">
               Nome
               <input
                  type={"text"}
                  placeholder="Ex: Adriano"
                  className="signFormInput rounded "
                  onChange={(e: any) => setNome(e.target.value)}
                  value={nome}
                  required
               />
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               CPF
               <input
                  type={"cpf"}
                  placeholder="Ex: 04269650940"
                  className="signFormInput rounded "
                  onChange={(e: any) => setCpf(e.target.value)}
                  value={cpf}
                  required
               />
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               Data de Nascimento
               <input
                  type={"date"}
                  placeholder="Ex: 14/03/1994"
                  className="signFormInput rounded "
                  onChange={(e: any) => setData_Nasc(e.target.value)}
                  value={data_nasc}
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
                  onChange={(value) => setTelefone(value)}
                  value={telefone}
                  rules={{ required: false }}
               />
            </label>

            <button
               className="text-xl text-white bg-green-400 hover:bg-green-500 p-4 rounded mt-10"
               onClick={handleRegisterCliente}
               type="submit"
            >
               Cadastrar
            </button>
         </span>
      </form>
   );
}

export default CadastroClienteForm;
