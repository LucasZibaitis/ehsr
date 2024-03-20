import Image from "next/image";
import NombreDelDía from "./components/NombreDelDía";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-10 text-6xl">
      <h1>CONCEPTIONS</h1>
      <NombreDelDía />
    </main>
  );
}
