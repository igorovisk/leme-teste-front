import React from "react";

interface ButtonProps {
   bgColor?: string;
   children: React.ReactNode;
   handleClick?: (
      ev?:
         | React.FormEvent<HTMLFormElement>
         | React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => void; // Make ev optional with the "?" symbol
   type: "submit" | "button" | "reset";
   hoverBgColor?: string;
   className?: string;
}

function Button(props: ButtonProps) {
   return (
      <button
         type={props.type}
         className={`text-white flex-nowrap p-4 rounded flex-1 items-center justify-center flex gap-2 hover:bg-${props.hoverBgColor} ${props.bgColor} ${props.className}`}
         onClick={props.handleClick}
      >
         {props.children}
      </button>
   );
}

export default Button;
