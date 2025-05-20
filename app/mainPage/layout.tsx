import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0d0d0d]" >
      <Navbar />
      <div className="my-[20px]" >{children}</div>
      <Footer />
    </div>
  );
}
