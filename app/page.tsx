'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';


export default function Home() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center justify-center mt-[15%] bg-[#0d0d0d] gap-[25px]" >
       <FaGithub size={30} color="#fff" />
      <Link href='/uzbek' className="text-white border-2 py-[10px] max-w-[250px] w-full text-center text-[20px]" >O`zbek</Link>
      <Link href='/ruskiy' className="text-white border-2 py-[10px] max-w-[250px] w-full text-center text-[20px]" >Русский</Link>
      <Link href='/english' className="text-white border-2 py-[10px] max-w-[250px] w-full text-center text-[20px]" >English</Link>
    </div>
  );
}
