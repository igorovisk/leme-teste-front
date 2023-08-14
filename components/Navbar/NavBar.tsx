import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import UserMenuButton from "../Button/UserMenuButton";
import { IoIosCreate } from "react-icons/io";
import { useRouter } from "next/router";

export function NavBar() {
   const [openedMenu, setOpenedMenu] = useState(false);
   const [navTextColor, setNavTextColor] = useState("white");
   const [navBgColor, setNavBgColor] = useState("black");
   const [bgOpacity, setBgOpacity] = useState("");
   const router = useRouter();

   useEffect(() => {
      if (router.pathname === "/") {
         setBgOpacity("bg-opacity-100");
      }
   }, [router.pathname]);

   useEffect(() => {
      const changeColors = () => {
         if (router.pathname === "/" && window.scrollY > 90) {
            setNavTextColor("black");
            setNavBgColor("white");
            setBgOpacity("bg-opacity-100");
         } else {
            setNavTextColor("white");
            setNavBgColor("black");
            setBgOpacity("bg-opacity-100");
         }
         if (router.pathname !== "/") {
            setNavTextColor("white");
            setNavBgColor("black");
            setBgOpacity("bg-opacity-70");
         }
      };

      window.addEventListener("scroll", changeColors);

      return () => {
         window.removeEventListener("scroll", changeColors);
      };
   }, [router.pathname]);

   return (
      <nav className={`fixed top-0 left-0 ease-in duration-300 z-10 w-full`}>
         <div
            className={`flex items-center justify-between md:p-5 p-10 z-[2] text-${navTextColor} gap-8 will-change-scroll  bg-${navBgColor} ${bgOpacity}`}
         >
            <Link href="/">
               <h1 className="font-bold text-2xl">Leme Admin</h1>
            </Link>
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center justify-end ">
               <>
                  <li
                     className={`flex rounded justify-center hoverItem items-center pl-2 pr-2 ${
                        navBgColor === "white" ? "bg-black" : "bg-violet-800 "
                     }  `}
                  >
                     <div className="flex justify-center items-center">
                        <img
                           alt="user-profile-picture"
                           src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                           className="hidden lg:inline-block relative h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 hover:cursor-pointer focus:z-10 "
                        />
                        <div className="p-4 ">
                           <Link
                              href={`#`}
                              className={`flex-nowrap flex hover:text-white font-bold text-white  `}
                           >
                              Administrador
                           </Link>
                        </div>
                     </div>
                  </li>

                  <li className="p-4 font-bold">|</li>
               </>
               <li
                  className={`p-4 hoverItem  ${
                     router.pathname == "/home" ? "active" : ""
                  }`}
               >
                  <Link href="/home">Admin</Link>
               </li>

               <li
                  className="p-4 flex items-center gap-2 cursor-pointer hover:text-red-400 hoverItem"
                  onClick={() => router.push("/")}
               >
                  <GoSignOut /> Logout
               </li>
            </ul>

            {/* Hamburguer Button */}
            <div
               className="block md:hidden z-10 "
               onClick={() => setOpenedMenu(!openedMenu)}
            >
               {openedMenu ? (
                  <AiOutlineClose
                     size={35}
                     className="cursor-pointer hover:text-amber-300 duration-300 bg-sky-500"
                     onClick={() => setOpenedMenu(!openedMenu)}
                  />
               ) : (
                  <AiOutlineMenu
                     size={35}
                     className="cursor-pointer hover:text-amber-300 duration-300"
                  />
               )}
            </div>

            {/* Mobile Menu */}

            <div
               className={
                  openedMenu
                     ? `md:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen  text-center ease-in duration-300 text-${navTextColor}`
                     : `md:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen  text-center ease-in duration-300 text-${navTextColor} `
               }
               style={{ backgroundColor: navBgColor }}
            >
               <ul
                  className={`flex flex-col justify-start gap-5 text-${navTextColor} h-fit text-left ml-5 mr-5`}
               >
                  <li
                     className="text-2xl hoverItem"
                     onClick={() => setOpenedMenu(false)}
                  >
                     <Link href="/">Home</Link>
                  </li>

                  <>
                     <hr className="flex h-2 border-sky-500 mt-5 w-[50%] justify-start self-start" />
                     <li
                        onClick={() => setOpenedMenu(false)}
                        className="hoverItem"
                     >
                        <UserMenuButton
                           path={`/clientes`}
                           className={`text-${navTextColor} text-2xl p-0`}
                        >
                           <IoIosCreate />
                           Clientes
                        </UserMenuButton>
                     </li>
                     <li
                        onClick={() => setOpenedMenu(false)}
                        className="hoverItem"
                     >
                        <UserMenuButton
                           path={`/pedidos`}
                           className={`text-${navTextColor} text-2xl p-0`}
                        >
                           <IoIosCreate />
                           Pedidos
                        </UserMenuButton>
                     </li>

                     <hr className="flex h-2 border-green-500 mt-5 w-[50%] justify-start self-start" />
                     <Link
                        className="flex bg-sky-500 rounded p-2 max-[500px]:justify-center max-[500px]:pt-5 hoverItem "
                        href={`/#`}
                     >
                        <li
                           className="flex items-center gap-2 max-[500px]:flex-col "
                           onClick={() => setOpenedMenu(false)}
                        >
                           <img
                              alt="user-profile-picture"
                              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                              className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 hover:cursor-pointer focus:z-10 "
                           />
                           <div
                              className="p-4  duration-200 flex-nowrap flex  text-2xl font-bold"
                              onClick={() => setOpenedMenu(false)}
                           >
                              Adminstrador
                           </div>
                        </li>
                     </Link>
                     <li
                        className="flex items-center gap-2 cursor-pointer p-4 text-2xl m-auto hoverItem hover:text-red-500"
                        onClick={() => {
                           setOpenedMenu(false);
                           router.push("/");
                        }}
                     >
                        <GoSignOut /> Logout
                     </li>
                  </>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default NavBar;
