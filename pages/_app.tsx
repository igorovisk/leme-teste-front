import React from "react";
import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";

import { queryClient } from "../services/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../global.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }) {
   return (
      <QueryClientProvider client={queryClient}>
         <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
         />
         <Head>
            <title>Leme Admin</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <NavBar />
         <ReactQueryDevtools initialIsOpen={false} />
         <Component {...pageProps} />
      </QueryClientProvider>
   );
}
