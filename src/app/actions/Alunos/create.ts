"use server"

import { redirect } from "next/navigation"

interface ValidationMessages {
    campo: String,
    mensagem: String
}


export async function create(prevState: any, formData: FormData) {

    const data = {
        nome: formData.get("nome"),
        turma: formData.get("turma")
    }

    const config = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch("http://localhost:8080/Aluno", config)

    if (resp.ok) {
        redirect("/alunos")
    }

    if (!resp.ok) {
        const messages: Array<ValidationMessages> = await resp.json()
        return {
            message: messages.find(m => m.campo == "nome")?.mensagem
        }
    }

}