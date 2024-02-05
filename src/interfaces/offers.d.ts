export interface OfferService {
  id: number;
  price: number;
  flupicFee: number;
  totalPrice: number;
  currency: string;
  exchange: boolean;
  socialMedia: string;
  serviceType: string;
  influencer: OfferSimpleInfluencer;
}

interface OfferSimpleInfluencer {
  id: number;
  name: string;
  lastname: string;
  profilePhotoUrl: string;
}
