"use client"


import { update } from "@/app/actions/Alunos/update";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";

interface EditFormProps {
    aluno: Aluno
}

export function EditForm({aluno}: EditFormProps){
    const initialState = {
        message: ""
      }
    
    const [state, formAction] = useFormState(update, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-4 bg-slate-900 p-6 m-6 min-w-[500px] rounded">
        <input type="hidden" name="id" value={aluno.id} />
        
        <h2 className="text-2xl font-bold">Editar Aluno {aluno.nome}</h2>
        <Input
          key="nome"
          label="Nome"
          name="nome"
          variant="bordered"
          labelPlacement="outside"
          defaultValue={aluno.nome}
          isInvalid={state?.message != ""}
          errorMessage={state?.message}
        />

        <Input
          key="turma"
          label="Turma"
          name="turma"
          variant="bordered"
          labelPlacement="outside"
          defaultValue={aluno.turma}
          isInvalid={state?.message != ""}
          errorMessage={state?.message}
        />  

        <div className="flex justify-around mt-4">
          <Link href="/categorias">
            <Button variant="bordered" startContent={<ArrowLeft size={18} />}>cancelar</Button>
          </Link>

          <SubmitButton />
        </div>
      </form>
    )
}