"use client"

import DropdownAction from "@/components/DropdownAction";
import { Icon } from "@/components/Icon";
import { Apple, ChevronDown, GraduationCap } from "lucide-react";
import { useRouter } from "next/navigation";
import { destroy } from "../actions/Alunos/destroy";
import toast from "react-hot-toast";

interface AlunoItemProps{
    aluno: {
        rm: number,
        nome: string,
        turma: string
    }
}

export function CategoriaItem({ aluno }: AlunoItemProps) {
    const router = useRouter()

    function handleDelete() {
        toast.promise(
            destroy(aluno.rm),
            {
                loading: 'apagando...',
                success: "apagado com sucesso",
                error: "erro ao apagar",
            }
        );
    }
    
    
    return(
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <GraduationCap size={40}/>
              <span>{aluno.nome}</span>
            </div>
            <DropdownAction 
                onEdit={() => { router.push("/Alunos/" + aluno.rm) }}
                onDelete={handleDelete}
            />
        </div>
    )
}