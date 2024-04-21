"use server"

import { redirect } from "next/navigation"

interface ValidationMessages {
    campo: String,
    mensagem: String
}


export async function update(formData: FormData) {
    const id = formData.get("id")
    const data = {
        nome: formData.get("nome"),
        turma: formData.get("turma")
    }

    const config = {
        method: "put",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch("http://localhost:8080/alunos/" + id, config)

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