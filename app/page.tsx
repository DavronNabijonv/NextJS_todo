'use client'
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <div>
      <p>Nima gap poscastni ko`ring va tushuning</p>
      <a href="/about" > about pagega sakrash </a><br/> 
      <a href="/aktivity" > aktivity pagega sakrash </a>
      <br/>
      <a href="/about/dashboard/users" > about user sahifaga o`tish </a>
    </div>
  );
}
