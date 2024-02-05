import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Form } from "@/components/offers/Form";
import { OfferSummary } from "@/components/offers/OfferSummary";
import { OfferSummaryLoading } from "@/components/offers/OfferSumaryLoading";
import './page.css';

const getService = async (serviceId: string | null) => {
	// console.log(serviceId);
	try {
		const response = await fetch(`${process.env.BACKEND_URL}/v1/services/${serviceId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const service = await response.json();
		// console.log(service);
		return { service };
	} catch (error) {
		console.log("Horror: ", error);
		return {};
	}
};

export default async function OffersPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const serviceId = typeof searchParams["serviceId"] === "string" ? searchParams["serviceId"] : null;

	if (!serviceId) {
		console.log("No se encontró el servicio");
		notFound();
	}

	const { service } = await getService(serviceId);

	if (service?.status === 400) {
		console.log("No se encontró el servicio");
		notFound();
	}

	// console.log("OffersPage", searchParams);
	return (
		<div className="container bg-gradient-to-br from-gray-950 via-gray-900 to-black to-60%">

			<Form serviceId={serviceId} />

			<Suspense fallback={<OfferSummaryLoading />} >
				<OfferSummary service={service} />
			</Suspense>

			
		</div>

	);
}
