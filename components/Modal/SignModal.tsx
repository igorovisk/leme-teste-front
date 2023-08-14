import React, { useEffect } from "react";
import { AiOutlineLogin, AiOutlineClose } from "react-icons/ai";
import { LoginForm } from "../Form";

function SignModal(props: { isOpen: Boolean; setIsOpen: any }) {
   const handleKeyDown = (event) => {
      if (event.key === "Escape") {
         // Verifica se a tecla pressionada foi a tecla ESC
         props.setIsOpen(false); // Fecha o modal
      }
   };
   useEffect(() => {
      if (props.isOpen) {
         document.addEventListener("keydown", handleKeyDown, false);
      }
      return () => {
         document.removeEventListener("keydown", handleKeyDown, false);
      };
   }, [props.isOpen]);

   return (
      <div>
         {/* overlay */}

         <>
            {props.isOpen && (
               <div
                  className={`absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[1] 
            h-[100vh] 
                  `}
                  onClick={() => props.setIsOpen(false)}
               />
            )}
            {/* modal */}
            {props.isOpen && (
               <div
                  className={`flex align-center rounded justify-center absolute top-[-120vh] left-[0] right-0 bottom-0 z-[2] bg-slate-100 w-[350px] max-w-[500px] m-auto p-4 modal-animation h-fit ${
                     props.isOpen ? "slide-in" : ""
                  } sm:w-[500px]`}
               >
                  {/* buttons */}
                  <div
                     className="absolute right-[-1rem] top-[-1rem] text-black cursor-pointer bg-zinc-200 p-2 rounded z-[2]"
                     onClick={() => {
                        props.setIsOpen(false);
                     }}
                  >
                     <AiOutlineClose className="text-lg" />
                  </div>

                  <div className="flex text-black text-center flex-1 bg-blue-500 p-2 w-[90%] top-[-5vh] absolute left-[5%] gap-3 rounded h-fit">
                     <button
                        className={`text-xl text-white border-green-500 p-4 rounded hover:bg-blue-400
                     flex-1 items-center justify-center flex gap-2 `}
                     >
                        <AiOutlineLogin /> Login
                     </button>
                  </div>
                  {/* buttons */}

                  {<LoginForm />}
               </div>
            )}
         </>
      </div>
   );
}

export default SignModal;
