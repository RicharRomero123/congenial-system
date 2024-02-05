import Link from "next/link";
import { CiFaceFrown } from "react-icons/ci";



export default function NotFound() {
  
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-2">
      <CiFaceFrown size={100} className="w-10 text-gray-400" />

      <h2 className="text-xl font-semibold">No se pudo encontrar la página solicitada</h2>
      <p>Puedes regresar e intentarlo de nuevo</p>
      <Link
        href="/influencers"
        className="mt-4 rounded-md bg-accent px-4 py-2 text-sm text-black transition-colors hover:bg-primary"
      >
        Regresar
      </Link>
    </section>
  );
}
