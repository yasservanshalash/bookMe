export type User = {
    name: string;
    email: string;
    avatar: string;
    isAdmin: boolean;
    isBanned: boolean;
    phoneNumber: string;
}

export type Place = {
    owner: string;
  title: string;
  address: string;
  photos: string[];
  description: string;
  perks: string[];
  extraInfo: string;
  checkIn: boolean;
  checkOut: boolean;
  maxGuests: number;
  price: number;
  place: string;
  isAvailable: boolean;
}

