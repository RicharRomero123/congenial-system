import {
	InfluencerPackagesGrid,
	InfluencerPriceGrid,
	InfluencerProfileName,
	InfluencerSocialMedia,
	PackageWithPrice,
} from "@/components/influencer";
import { AboutProfile } from "@/components/influencer/profile/AboutProfile";
import { Influencer } from "@/interfaces/influencer";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
	const { id } = params;
	try {
		const influencer = await getInfluencerData(id);
		if (!Object.hasOwn(influencer, 'id')) {
			return {
				title: "Influencer no encontrado",
				description:
					"El influencer que busca no se encuentra disponible o no ha sido encontrado. Esto puede ser por que el influencer no existe o por que el influencer no ha sido aprobado por el administrador.",
			};
		}
		return {
			title: influencer.name,
			description: influencer.description,
			image: influencer.profilePicture,
			alternates: { canonical: `/influencers/${influencer.uuid}` }
		};
	} catch (error) {
		console.log(error);
		return {
			title: "Influencer no encontrado",
			description:
				"El influencer que busca no se encuentra disponible o no ha sido encontrado. Esto puede ser por que el influencer no existe o por que el influencer no ha sido aprobado por el administrador.",
		};
	}
}

const getInfluencerData = async (uuid: string) => {
	try {
		const response = await fetch(`${process.env.BACKEND_URL}/v1/influencers/${uuid}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-cache",
		});

		if (!response.ok) throw new Error("No se pudo obtener la información del influencer");

		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		return {};
	}
};

export default async function InfluencerPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;
	const influencer: Influencer = await getInfluencerData(id);
	if (!Object.hasOwn(influencer, 'id')) {
		notFound();
	}
	// console.log(influencer);
	const socialMediaList = influencer.socialMediaList;
	const firstService = socialMediaList[0].services[0];

	const socialMediaLinks = socialMediaList.flatMap(socialMedia =>
		socialMedia.posts.map(post => post.url)
	);
	console.log(socialMediaLinks);
	return (
		<div className="py-11  xl:max-w-[1200px] mx-auto ">
			<div className="min-h-[70vh] mx-auto">
				<InfluencerProfileName name={influencer.name} />
				<InfluencerSocialMedia socialMediaLinks={socialMediaLinks} />

				<section className="grid grid-cols-1 md:grid-cols-2  mt-10 ">
					<InfluencerPriceGrid />
					<div className="flex flex-col  mx-auto">
						<AboutProfile
							interests={influencer.interests}
							region={influencer.region}
							socialMedia={influencer.socialMediaList}
						/>
						<InfluencerPackagesGrid firstService={firstService}>
							{socialMediaList.map((socialMedia) =>
								socialMedia.services.map((service) => (
									<PackageWithPrice
										key={service.id}
										serviceId={service.id}
										socialMedia={socialMedia.socialMedia}
										price={service.totalPrice}
										type={service.serviceType}
									/>
								)),
							)}
						</InfluencerPackagesGrid>
					</div>
				</section>
			</div>
		</div>
	);
}
