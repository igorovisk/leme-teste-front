import { useRouter } from "next/router";
import React from "react";

interface UserMenuButtonProps {
   children: any;
   path: string;
   textColor?: string;
   fontSize?: string;
   className?: string;
   active?: boolean;
   customActive?: string;
}

export function UserMenuButton(props: UserMenuButtonProps) {
   const router = useRouter();

   return (
      <button
         className={`${
            props.className
         } pl-5 p-3 rounded-xl flex-1 items-center flex gap-2 hover:text-violet-500 hover:bg-white hoverItem 
          w-full ${
             props.active && !props.customActive
                ? "bg-violet-500 text-white-500"
                : ""
          } ${props.active && props.customActive}`}
         onClick={() => router.push(props.path)}
      >
         {props.children}
      </button>
   );
}

export default UserMenuButton;
