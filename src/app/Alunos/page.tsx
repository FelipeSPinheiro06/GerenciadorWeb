/* eslint-disable react/jsx-key */
import NavBar from "@/components/NavBar";
import { Apple, ChevronDown, Plus } from "lucide-react";
import { CategoriaItem } from "./CategoriaItem";
import { Button } from "@nextui-org/button";


export default function Aluno() {

  const categorias = [
    {
      id: 1,
      nome: "Felipe"
    },
    {
      id: 2,
      nome: "Vinão"
    },
    {
      id: 3,
      nome: "Tavão"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="alunos"/>
      
      <section className="flex flex-col gap-6 mt-6 p-6 bg-white rounded min-w-[500px]">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Alunos cadastrados</h2>
          <Button color="secondary" startContent={<Plus size={18}/>}>
            novo aluno
          </Button>
        </div>

        {categorias.map(categoria => <CategoriaItem categoria={categoria} />)}


        


      </section>



    </main>
  );
}