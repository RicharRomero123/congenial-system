import Link from "next/link";
import { CiFaceFrown } from "react-icons/ci";


export default function NotFound() {
	return (
		<section className="flex h-screen flex-col items-center justify-center gap-2">
			<CiFaceFrown size={100} className="w-10 text-gray-400" />

			<h2 className="text-xl font-semibold">Parece que el influencer que busca no existe</h2>
			<p>Puedes regresar y revisar los influencers que tenemos con nosotros</p>
			<Link
				href="/influencers"
				className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
			>
				Regresar
			</Link>
		</section>
	);
}
