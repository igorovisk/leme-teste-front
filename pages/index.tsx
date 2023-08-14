import React, { useState } from "react";
import PublicPagesLayout from "../components/Layout/PublicPagesLayout";
import SignModal from "../components/Modal/SignModal";

export default function Index() {
   const [isOpen, setIsOpen] = useState(false);

   const handleClick = () => {
      setIsOpen(!isOpen);
   };

   return (
      <PublicPagesLayout>
         <main
            className={`flex items-center flex-col  ${
               isOpen ? "h-[160vh]" : "h-[100vh]"
            } bg-fixed bg-cover custom-img w-full mt-[-6rem]`}
         >
            {/* Overlay */}
            <div
               className={`absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] ${
                  isOpen ? "h-[100vh]" : "h-[100vh]"
               } `}
            />
            <div
               className={`flex items-center flex-col justify-center ${
                  isOpen ? "h-[100vh]" : "h-[160vh]"
               } bg-fixed bg-cover custom-img`}
            >
               <div className="p-5 text-white z-[2] m-auto text-center">
                  <h2 className="text-5xl font-bold">Leme Admin</h2>

                  <p className="py-5 text-xl mb-5 mt-5">
                     Adminitre seus clientes e pedidos
                  </p>

                  <div className="flex gap-10 justify-center items-center">
                     <button
                        className="px-8 py-2 border  hover:text-green-500 hover:border-green-500 hoverItem"
                        onClick={() => handleClick()}
                     >
                        Entrar
                     </button>
                  </div>
               </div>
            </div>
            <SignModal isOpen={isOpen} setIsOpen={setIsOpen} />
         </main>
      </PublicPagesLayout>
   );
}
