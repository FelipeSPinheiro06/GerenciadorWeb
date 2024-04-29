import NavBar from "@/components/NavBar";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="funcionarios" />
      <h2>Funcionário</h2>
    </main>
  );
}
