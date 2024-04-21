import DropdownAction from "@/components/DropdownAction";
import { Icon } from "@/components/Icon";
import { Apple, ChevronDown, GraduationCap } from "lucide-react";

interface CategoriaItemProps{
    categoria: {
        id: number,
        nome: string
    }
}

export function CategoriaItem({categoria}: CategoriaItemProps) {
    return(
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <GraduationCap size={40}/>
              <span>{categoria.nome}</span>
            </div>
            <DropdownAction />
        </div>
    )
}