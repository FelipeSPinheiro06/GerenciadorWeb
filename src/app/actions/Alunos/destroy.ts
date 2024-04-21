"use server"

import { redirect } from "next/navigation"


export async function destroy(id:number) {
    const resp = await fetch("http://localhost:8080/alunos/" + id, { method: "delete" })

    if (resp.ok) {
        redirect("/alunos")
    }

    if (!resp.ok) {
        throw new Error("erro ao apagar categoria")
    }
}