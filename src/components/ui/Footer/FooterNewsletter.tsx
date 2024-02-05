"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import { contactAction } from "@/lib/main/action";
const newsletterObject = z.object({
  email: z.string().email({ message: "Correo electrónico inválido" }),
});

type NewsletterObject = z.infer<typeof newsletterObject>;

export const FooterNewsletter = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterObject>({
    resolver: zodResolver(newsletterObject),
  });

  const onSubmit: SubmitHandler<NewsletterObject> = async (data) => {
    toast.loading("Suscribiendose...");
    try {
      const response = await contactAction(data);
      console.log(response);
      toast.dismiss();
      toast.success("Gracias por suscribirte");
      
      reset();
    } catch (error) {
      toast.error("Ocurrió un error al suscribirte");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row"
    >
      <Toaster />
      <div className="flex flex-col">
        <input
          {...register("email")}
          className="px-4 py-2   border rounded-md bg-gray-900 text-gray-300 border-gray-600  focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
          placeholder="Correo Electrónico"
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 lg:p-3"
      >
        Subscribirse
      </button>
    </form>
  );
};
