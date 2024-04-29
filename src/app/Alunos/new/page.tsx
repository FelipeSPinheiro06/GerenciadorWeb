"use client"
import { create } from "@/app/actions/Alunos/create";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";


export default function NewAlunos() {
    const initialState = {
        message: ""
    }

    const [state, formAction] = useFormState(create, initialState)
    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="alunos"/>

            <form action={formAction} className="flex flex-col gap-4 bg-white p-6 m-6 min-w-[500px] rounded">
                <h2 className="text-2xl font-bold text-black">Cadastrar aluno</h2>
                <Input 
                    key="nome"
                    label="Nome"
                    name="nome"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />

                <Input 
                    key="turma"
                    label="turma"
                    name="turma"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />

                <div className="flex justify-around mt-4">
                    <Link href="/Alunos">
                        <Button variant="bordered" startContent={<ArrowLeft size={18} color="#000000"/>}>
                            <p className="text-black">
                                cancelar
                            </p>
                        </Button>
                    </Link>

                    <SubmitButton />
                </div>

            </form>

        </main>
    )
}