import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { cn } from "@/utils/cn";

export const FirstSection = () => {
	return (
		<section
			id="home"
			className={cn(
				"flex items-center justify-center xl:mb-24 mx-auto pt-20 mt-[-100px]",
				// "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-900 via-slate-900 to-black"
			)}
		>
			<figure className=" hidden md:block h-full animate-fade-right animate-delay-200 ">
				<Image
					className=""
					alt="Movie"
					src="/images/image-first-section.png"
					// fill
					height={750}
					width={750}
				// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</figure>

			<article className="flex flex-col mt-10 lg:mt-0 gap-10 md:gap-8 animate-fade-up lg:animate-fade-left">
				<div className="flex flex-col gap-6 items-center md:mr-4 ">
					<h1
						className={clsx(
							"text-4xl md:text-5xl lg:text-7xl mx-2 pb-2 lg:max-w-3xl leading-tight text-center font-bold",
							"text-white",
						)}
					>
						Descubre a los mejores influencers
					</h1>
					<p
						className={clsx(
							"text-xl md:text-3xl md:max-w-2xl lg:max-w-none text-center   font-bold",
						)}
					>
						<span className="text-gray-200">Conecta, </span>
						<span className="text-primary">colabora</span>
						<span> y</span>
						<span className="text-accent"> vende</span>
					</p>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-center md:justify-around">
					<div className="flex flex-col items-center">
						<Link href="/influencers">
							<button
								type="button"
								style={{
									color: "white",
								}}
								className={cn(
									"btn btn-primary  btn-outline rounded-3xl btn-lg border-2 md:text-2xl font-semibold transition ease-in-out hover:scale-125 hover:font-bold",
									"bg-gradient-to-bl from-primary to-secondary border-none",
								)}
							>
								Elige tu Influencer
							</button>
						</Link>
					</div>
				</div>
			</article>
		</section>
	);
};
