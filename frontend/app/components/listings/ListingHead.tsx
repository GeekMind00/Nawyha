'use client';

import Image from "next/image";

import { 
    Apartment,
} from "@/app/actions/getApartment";

import Heading from "../Heading";

interface ListingHeadProps {
  title: string;
  address: {
    city: string;
    street: string;
    state: string;
    postalCode: string;
};
  image: string;
  id: string;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  address,
  image,
  id,
}) => {

  return ( 
    <>
      <Heading
        title={title}
        subtitle={`${address?.street}, ${address?.city}, , ${address?.state}`}
      />
      <div className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Image
          src={image}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
        </div>
      </div>
    </>
   );
}
 
export default ListingHead;