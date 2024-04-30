
import NavBar from "@/components/NavBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";
import { getById } from "@/app/actions/Alunos/get-by-id";


export default async function EditCategorias({ params }: Params) {
  const { rm } = params
  const aluno = await getById(rm)
 
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="alunos" />
      <EditForm aluno={aluno} />
    </main>
  );
}