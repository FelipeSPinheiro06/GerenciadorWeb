/* eslint-disable react/jsx-key */
import NavBar from "@/components/NavBar";
import { Apple, ChevronDown, Plus } from "lucide-react";
import { CategoriaItem } from "./CategoriaItem";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { getAlunos } from "../actions/Alunos/get";

interface Aluno {
  id: number,
  nome: string,
  turma:string
}

export default async function Aluno() {

  const alunos: Aluno[] = await getAlunos()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="alunos"/>
      
      <section className="flex flex-col gap-6 mt-6 p-6 bg-white rounded min-w-[500px]">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Alunos cadastrados</h2>
          <Link href="/Alunos/new">
            <Button color="secondary" startContent={<Plus size={18}/>}>
              novo aluno
            </Button>
          </Link>
        </div>

        {alunos.map(aluno => <CategoriaItem aluno={aluno} />)}


        


      </section>



    </main>
  );
}