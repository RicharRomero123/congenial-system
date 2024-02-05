export interface Influencer {
  id: number;
  uuid: string;
  name: string;
  lastname: string;
  email?: string | null;
  uuid: string;
  name: string;
  cellphone?: string | null;
  exchange: boolean;
  country: string;
  region: string;
  interests: string[];
  socialMedia: SocialMedia[];
  profilePhotoUrl: string;
  referencePrice: number;
  _links: Links;
  igReelPrice?: number;
  igPostPrice?: number;
  collabPrice?: number;
  tiktokReelPrice?: number;
  tiktokPostPrice?: number;
  description?: string;
}


export interface SocialMedia {
  id: number;
  socialMedia: string;
  username: string;
  followers: number;
}


export interface Page {
  size:          number;
  totalElements: number;
  totalPages:    number;
  number:        number;
}


export interface Links {
  first?: First;
  prev?:  First;
  self:  First;
  next?:  First;
  last?:  First;
}

export interface First {
  href: string;
}
