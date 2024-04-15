import Link from "next/link"

interface NavBarProps {
    active: "Aluno" | "Matriculas" | "Funcionarios"
}

export default function NavBar({active}: NavBarProps) {
    const classActive = "border-b-4 pb-4 border-pink-600"

    return (
        <nav className="flex bg-slate-900 w-full mt-0 justify-between items-center px-6 py-4">
        <h1 className="text-4xl font-bold">WebSchool</h1>
        <ul className="flex gap-6">
          <li className={active == "Aluno" ? classActive : ""}>
            <Link href="./app/Alunos/page.tsx">Aluno</Link>
          </li>
          <li className={active == "Matriculas" ? classActive : ""}>
            <Link href="/matriculas">Matrículas</Link>
          </li>
          <li className={active == "Funcionarios" ? classActive : ""}>
            <Link href="/funcionarios">Funcionários</Link>
          </li>
        </ul>
        <div className="w-14 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
        </div>
      </nav>
    ) 
}