
interface IParams {
    listingId: string
};

export interface Apartment {
    _id: string;
    title: string;
    description: string;
    address: {
        street: string,
        city: string,
        state: string,
        postalCode: string
    };
    location: {
        latitude: string,
        longitude: string
    };
    price: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    floor: number;
    buildingName: string;
    yearBuilt: number;
    condition: string;
    furnished: boolean;
    amenities: string[];
    utilities: string[];
    image: string;
    contactInfo: {
        name: string;
        email: string;
        phone: string;
    };
}

export default async function getApartmentById(
  params: IParams
) {
    try {
        const res= await fetch("http://127.0.0.1:5000/api/apartments/" + params["listingId"], {
            cache: "no-store",
          });
        const apartment: Apartment= await res.json();
        return apartment;
      } catch (error: any) {
        throw new Error(error);
      }
}