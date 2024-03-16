'use client';

import { 
    Apartment,
} from "@/app/actions/getApartment";

import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";

interface ListingClientProps {
  listing: Apartment
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
}) => {



  return ( 
    <Container>
      <div 
        className="
          max-w-screen-lg 
          mx-auto
        "
      >
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            image={listing.image}
            address={listing.address}
            id={listing._id}
          />
          <div 
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <ListingInfo
              contactInfo={listing.contactInfo}
              description={listing.description}
              area={listing.area}
              bedrooms={listing.bedrooms}
              bathrooms={listing.bathrooms}
              floor={listing.floor}
              price={listing.price}
              buildingName={listing.buildingName}
              yearBuilt={listing.yearBuilt}
              condition={listing.condition}
            />
            <div 
              className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
            >
            </div>
          </div>
        </div>
      </div>
    </Container>
   );
}
 
export default ListingClient;