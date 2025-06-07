'use client'

import Link from "next/link";
import React from "react";
import { IoExit } from '@react-icons/all-files/io5/IoExit';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <div className="navbar main-container p-[10px] border-b-[1px] border-stone-300 flex items-center justify-between">
      <Link href="/mainPage" className="text-white text-[25px]">
        {t('title')} <span className="text-[#10aa10]">Studio</span>
      </Link>
      <Link href="/" className="text-white text-[25px]">
        <IoExit />
      </Link>
    </div>
  );
}
