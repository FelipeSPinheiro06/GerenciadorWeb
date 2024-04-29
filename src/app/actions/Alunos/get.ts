"use server"

export async function getAlunos() {

    const resp = await fetch("http://localhost:8080/Aluno", { next: { revalidate: 0 }})
    return await resp.json()

}