import React from "react";

export function PublicPagesLayout({ children }) {
   return (
      <main className="flex bg-black w-full h-fit mt-[6rem]">{children}</main>
   );
}

export default PublicPagesLayout;
