import { OfferService } from "./offers";


export interface Influencer {
    id:              number;
    uuid:            string;
    name:            string;
    lastname:        string;
    email:           null;
    cellphone:       string;
    country:         string;
    region:          string;
    description:     null;
    profilePhotoUrl: string;
    interests:       string[];
    socialMediaList: SocialMediaList[];
}

export interface SocialMediaList {
    id:          number;
    socialMedia: string;
    username:    string;
    followers:   number;
    services:    Service[];
    posts:       Post[];
}

export interface Post {
    id:  number;
    url: string;
}

export interface Service {
    id:          number;
    price:       number;
    flupicFee:   number;
    totalPrice:  number;
    currency:    string;
    serviceType: string;
    exchange:    boolean;
    socialMedia: string;
}

