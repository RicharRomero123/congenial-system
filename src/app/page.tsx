import { FirstSection, ContactForm, FeaturesSection, NosotrosSection } from "@/components/main";
import { cn } from "@/utils/cn";

export default function MainPage() {
	return (
		<div>
			<div
				className={cn(
					"bg-[radial-gradient(ellipse_90%_65%_at_left,_var(--tw-gradient-stops))] from-primary/40 from-10% via-[#0f041a] via-60% to-black to-90%",
				)}
			>
				<FirstSection />
				{/* <div className="w-full flex justify-center">
          <div className="divider divider-neutral w-[95%] "></div>
        </div> */}
				<NosotrosSection />
				{/* <div className="w-full flex justify-center">
          <div className="divider divider-neutral w-[95%] "></div>
        </div> */}
			</div>
			<div
				className={cn(
					"bg-[radial-gradient(ellipse_90%_60%_at_right,_var(--tw-gradient-stops))] from-secondary/30 from-10% via-[#0f041a] via-60% to-black to-90%",
				)}
			>
				<FeaturesSection />
				{/* <div className="w-full flex justify-center">
          <div className="divider divider-neutral  w-[95%] "></div>
        </div> */}
				{/* <div className="divider divider-neutral"></div> */}
				<ContactForm />
			</div>
		</div>
	);
}
