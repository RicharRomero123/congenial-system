"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactFormInputs } from "@/lib/main/contactSquema";
import { toast, Toaster } from "sonner";
import { contactAction } from "@/lib/main/action";
export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		getValues,
		setValue,
		watch,
		reset,
		formState: { errors },
	} = useForm<ContactFormInputs>({
		resolver: zodResolver(ContactSchema),
		defaultValues: {
			personType: "INFLUENCER",
		},
	});

	const selectPersonType = (personType: "INFLUENCER" | "COMPANY") => {
		if (personType === getValues("personType")) return;
		reset();
		setValue("personType", personType);
	};

	const sendContactForm: SubmitHandler<ContactFormInputs> = async (data) => {
		console.log(data);
		const formData = await contactAction(data);
		if (formData?.status === 400) {
			toast.error("Error al enviar el mensaje. Intentelo denuevo", {
				duration: 4000,
				position: "top-center",
			});
			return;
		}
		reset();
		toast.success("Mensaje enviado correctamente", {
			duration: 4000,
			position: "top-center",
		});
	};

	return (
		<section id="contactanos" className="hero pt-20 mt-[-40px]">
			<Toaster />
			<div id="contactanos-id" className="hero-content max-w-full flex-col mb-24">
				<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">Contáctanos</h1>

				<div className="w-full flex flex-col items-center gap-6">
					<h2 className="font-bold">Soy:</h2>
					<div className="tabs tabs-boxed border border-slate-100 sm:w-3/4 md:w-1/2 self-center mb-8">
						<button
							type="button"
							onClick={() => selectPersonType("INFLUENCER")}
							className={`tab ${watch("personType") === "INFLUENCER" ? "bg-secondary text-white font-bold" : "text-white"}`}
						>
							Influencer
						</button>
						<button
							type="button"
							onClick={() => selectPersonType("COMPANY")}
							className={`tab ${watch("personType") === "COMPANY" ? "bg-accent text-black font-bold" : "text-white"}`}
						>
							Empresario
						</button>
					</div>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl  shadow-2xl bg-gray-950 mb-4">
					<form onSubmit={handleSubmit(sendContactForm)} className="card-body gap-4 grid grid-cols-1 md:grid-cols-2">
						<div className="form-control">
							<label className="label">
								<span className="label-text text-slate-50">Nombre</span>
							</label>
							<input {...register("name")} type="text" placeholder="Tu nombre" className="input input-bordered" />
							{errors.name && (
								<label className="label">
									<span className="label-text-alt text-red-500">{errors.name?.message}</span>
								</label>
							)}
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-slate-50">Correo</span>
							</label>
							<input {...register("email")} placeholder="Tú correo electrónico" className="input input-bordered" />
							{errors.email && (
								<label className="label">
									<span className="label-text-alt text-red-500">{errors.email?.message}</span>
								</label>
							)}
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-slate-50">Celular</span>
							</label>
							<input
								{...register("phone")}
								type="text"
								maxLength={9}
								placeholder="Tú N° de celular"
								className="input input-bordered"
							/>
							{errors.phone && (
								<label className="label">
									<span className="label-text-alt text-red-500">{errors.phone?.message}</span>
								</label>
							)}
						</div>
						{watch("personType") === "INFLUENCER" ? (
							<div className="form-control">
								<label className="label">
									<span className="label-text text-slate-50">Enlace a tu red social más usada</span>
								</label>
								<input
									{...register("mostUsedSocialMediaURL")}
									type="text"
									placeholder="Red social"
									className="input input-bordered"
								/>
								{errors.mostUsedSocialMediaURL && (
									<label className="label">
										<span className="label-text-alt text-red-500">{errors.mostUsedSocialMediaURL?.message}</span>
									</label>
								)}
							</div>
						) : (
							<div className="form-control">
								<label className="label">
									<span className="label-text text-slate-50">Nombre de tu empresa</span>
								</label>
								<input
									{...register("companyName")}
									type="text"
									placeholder="Tú empresa o negocio"
									className="input input-bordered"
								/>
								{errors.companyName && (
									<label className="label">
										<span className="label-text-alt text-red-500">{errors.companyName?.message}</span>
									</label>
								)}
							</div>
						)}
						<div className="form-control md:col-span-2">
							<label className="label">
								<span className="label-text text-slate-50">¿Tienes alguna duda o consulta? Coméntanosla aquí</span>
							</label>
							<textarea
								{...register("question")}
								rows={3}
								maxLength={500}
								placeholder="Escribe aquí"
								className="textarea textarea-bordered"
							></textarea>
							{errors.question && (
								<label className="label">
									<span className="label-text-alt text-red-500">{errors.question?.message}</span>
								</label>
							)}
						</div>
						<div className="form-control mt-6 md:col-span-2 flex justify-center">
							{
								<button
									// disabled={isLoading}
									className={`btn btn-primary rounded-lg text-xl font-semibold`}
								>
									Contactar
								</button>
							}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
