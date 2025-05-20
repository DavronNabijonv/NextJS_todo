import Link from "next/link";
import React from "react";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer main-container p-[10px] border-t-[1px] border-stone-300 flex items-center justify-center gap-[15px] ">

      <Link
        href="https://www.instagram.com/studio_burushli/#"
        target="_blank"
        className="p-[10px] text-white text-[30px] bg-[#323343] hover:bg-[#d7307a]"
      >
        <FaInstagram />
      </Link>

      <Link
        href="https://www.instagram.com/zoda_shaxi/#"
        target="_blank"
        className="p-[10px] text-white text-[30px] bg-[#323343] hover:bg-[#d7307a]"
      >
        <FaInstagram />
      </Link>

      <Link
        href="https://t.me/burushli_studio"
        target="_blank"
        className="p-[10px] text-white text-[30px] bg-[#323343] hover:bg-[#088cce]"
      >
        <FaTelegram />
      </Link>

      <Link
        href="https://t.me/shahrizodaart"
        target="_blank"
        className="p-[10px] text-white text-[30px] bg-[#323343] hover:bg-[#088cce]"
      >
        <FaTelegram />
      </Link>

      <Link
        href="https://www.tiktok.com/@studio_burushli"
        target="_blank"
        className="p-[10px] text-white text-[30px] bg-[#323343] hover:bg-[#3f7a88]"
      >
        <FaTiktok />
      </Link>

    </div>
  );
}
