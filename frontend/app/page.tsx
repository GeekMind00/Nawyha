import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";
import getApartments from "./actions/getApartment";





const Home = async () => {
  const apartments = await getApartments();


  if (apartments.length === 0) {
    return (
        <EmptyState/>
    );
  }

  return (
      <Container>
        <div 
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {apartments.map((apartment: any) => (
            <ListingCard
              key={apartment._id}
              data={apartment}
            />
          ))}
        </div>
      </Container>
  )
}

export default Home;