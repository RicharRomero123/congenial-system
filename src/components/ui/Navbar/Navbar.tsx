import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
	return (
		<header className="h-24 sticky top-0 z-40 bg-gradient-to-b from-black from-50%">
			<nav className="drawer drawer-end">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					{/* Navbar */}
					<div className="w-full navbar">
						<Link href="/">
							<Image
								className="ml-3 md:ml-5 lg:ml-8 animate-fade-right"
								src={"/images/Flupic-logo.png"}
								alt="Flupic Logo"
								width={100}
								height={100}
							/>
						</Link>
						<div className="flex-1"></div>
						<div className="flex-none hidden lg:block">
							<ul className="menu menu-horizontal animate-fade-left">
								{/* Navbar menu content here */}
								<li>
									<Link href="/#home" className="text-white text-lg font-semibold">
										Home
									</Link>
								</li>
								<li>
									<Link href="/#nosotros" className="text-white text-lg font-semibold">
										Nosotros
									</Link>
								</li>
								<li>
									<Link href="/#servicios" className="text-white text-lg font-semibold">
										Servicios
									</Link>
								</li>
								<li>
									<Link href="/#contactanos" className="text-white text-lg font-semibold">
										Contáctanos
									</Link>
								</li>

								<li>
									<Link href="/influencers" className="p-0">
										<button
											className={cn(
												"py-2 px-4 mx-4 rounded-lg text-white text-lg font-semibold  ",
												"transition ease-in-out hover:scale-125 duration-300  bg-gradient-to-bl from-primary to-secondary border-none hover:via-primary hover:to-secondary",
											)}
										>
											Influencers
										</button>
									</Link>

								</li>
							</ul>
						</div>
						<div className="flex-none lg:hidden">
							<label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
								<GiHamburgerMenu className="text-white text-2xl" />
							</label>
						</div>
					</div>
					{/* Page content here */}
				</div>
				<div className="drawer-side  z-10">
					<label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
					<ul className="menu p-4 w-60 min-h-full bg-base-200 bg-gradient-to-l via-slate-950 via-20% from-secondary/40 to-black">
						{/* Sidebar content here */}
						<li>
							<Link href="/#home">
								<p className="text-white text-xl">Home</p>
							</Link>
						</li>
						<li>
							<Link href="/#nosotros">
								<p className="text-white text-xl">Nosotros</p>
							</Link>
						</li>
						<li>
							<Link href="/#servicios" className="text-white text-xl">
								Servicios
							</Link>
						</li>
						<li>
							<Link href="/#contactanos">
								<p className="text-white text-xl">Contactanos</p>
							</Link>
						</li>
						<li className="">
							<Link href="/influencers" className="">
								<button
									className={cn(
										"py-2 px-4 mt-2 rounded-lg text-white text-lg font-semibold",
										"transition ease-in-out hover:scale-125 duration-300  bg-gradient-to-bl from-primary to-secondary border-none hover:via-primary hover:to-secondary",
									)}
								>
									Influencers
								</button>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			{/* </nav> */}
		</header>
	);
};
