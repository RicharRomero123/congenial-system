"use server"
import { Influencer, Links, Page } from "@/interfaces/influencers";

export const getInfluencersData = async (
	page: number = 0,
	platforms: string = "",
	interests: string = "",
	minPrice: number | null,
	region: string | null = "",
	isExchangable: boolean | undefined,
): Promise<{
	influencers: Influencer[];
	pageInfo: Page;
	links: Links;
}> => {
	console.log("GET Request");
	// console.table({
	// 	page,
	// 	platforms,
	// 	interests,
	// 	minPrice,
	// 	region,
	// });
	let url = `${process.env.BACKEND_URL}/v1/influencers?page=${page}&size=12&minPrice=${
		minPrice ?? 1
	}&maxPrice=3000&region=${region ?? ""}&interests=${interests}&socialMedia=${platforms}`;
	if (isExchangable !== undefined) {
		url = url + `&exchange=${isExchangable}`;
	}
	try {
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 60 * 60,
			}
		});

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return {
			influencers: data._embedded?.influencerSearchResultResponseList,
			pageInfo: data.page,
			links: data._links,
		};
	} catch (error) {
		console.log(error);
		return {
			influencers: [],
			pageInfo: { size: 0, totalElements: 0, totalPages: 0, number: 0 },
			links: { self: { href: "" } },
		};
	}
};
