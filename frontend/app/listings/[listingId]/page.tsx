
import getApartmentById from "@/app/actions/getApartmentById";


import EmptyState from "@/app/components/EmptyState";

import ListingClient from "./ListingClient";

interface IParams {
  listingId: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const apartment = await getApartmentById(params);

  if (!apartment) {
    return (
        <EmptyState showReset/>
    );
  }

  return (
      <ListingClient
        listing={apartment}
      />

  );
}
 
export default ListingPage;