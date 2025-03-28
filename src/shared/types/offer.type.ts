import { CityType } from './city.enum.js';
import { OfferType } from './offer-type.enum.js';
import { GoodsType } from './goods.enum.js';
import { User } from './user.type.js';
import { Location } from './location.type.js';

export type Offer = {
  title: string;
  description: string;
  createdDate: Date;
  city: CityType;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: OfferType;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: GoodsType[];
  author: User;
  commentCount: number;
  location: Location;
}
