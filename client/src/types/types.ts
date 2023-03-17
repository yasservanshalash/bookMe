export type User = {
    _id: string;
    name: string;
    email: string;
    avatar: string;
    isAdmin: boolean;
    isBanned: boolean;
    phoneNumber: string;
    location: string;
    nationality: string;
    dateOfBirth: string;
}

export type Place = {
  _id: string;
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

