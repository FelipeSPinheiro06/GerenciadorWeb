/* eslint-disable react/jsx-key */
import NavBar from "@/components/NavBar";
import { Apple, ChevronDown, Plus } from "lucide-react";
import { CategoriaItem } from "./CategoriaItem";
import { Button } from "@nextui-org/button";


export default function Aluno() {

  const categorias = [
    {
      id: 1,
      nome: "alimentação",
      icone: "apple"
    },
    {
      id: 2,
      nome: "transporte",
      icone: "bus"
    },
    {
      id: 1,
      nome: "educação",
      icone: "ebook"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="alunos"/>
      
      <section className="flex flex-col gap-6 mt-6 p-6 bg-slate-900 rounded min-w-[500px]">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Categorias cadastradas</h2>
          <Button color="primary" startContent={<Plus size={18}/>}>
            nova categoria
          </Button>
        </div>

        {categorias.map(categoria => <CategoriaItem categoria={categoria} />)}


        


      </section>



    </main>
  );
}