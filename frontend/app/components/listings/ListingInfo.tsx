'use client';

import dynamic from "next/dynamic";
import { IconType } from "react-icons";



interface ListingInfoProps { 
description: string,
price: number,
area: number,
bedrooms: number,
bathrooms: number,
floor: number,
buildingName: string,
yearBuilt: number,
condition: string,
contactInfo: {
    name: string,
    email: string,
    phone: string
}
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  description,
  price,
  area,
  bedrooms,
  bathrooms,
  floor,
  buildingName,
  yearBuilt,
  condition,
  contactInfo
}) => {

  return ( 
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-10
          "
        >
          <div>Posted by  </div>
          <div>  {contactInfo?.name} </div>
          <div>  {contactInfo?.email} </div>
          <div>  {contactInfo?.phone}</div>
        </div>
        <div className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>
            {area} m 
          </div>
          <div>
            {bedrooms} bedrooms
          </div>
          <div>
            {bathrooms} bathrooms
          </div>
        </div>
      </div>
      <div>
        Building Name: {buildingName}
      </div>
          <div>
            Year Built: {yearBuilt}
          </div>
          <div>
            Floor: {floor}
          </div>
          <div>
            Condition: {condition}
          </div>
          <div>
            Price: {price} egp
          </div>
          
      <div className="
      text-lg font-light text-neutral-500">
        {description}
      </div>
      <hr />
    </div>
   );
}
 
export default ListingInfo;

// Apartment ID: Unique identifier for each apartment.
// Title/Name: A descriptive title or name for the apartment.
// Description: Additional details about the apartment, such as features, amenities, or any special characteristics.
// Address: The address of the apartment, including street, city, state, and postal code.
// Location Coordinates: Geographic coordinates (latitude and longitude) for the apartment's location.
// Price: Rental or sale price of the apartment.
// Area/Size: Total area or size of the apartment (in square feet or square meters).
// Number of Bedrooms: Number of bedrooms in the apartment.
// Number of Bathrooms: Number of bathrooms in the apartment.
// Floor: The floor on which the apartment is located within the building.
// Building/Apartment Complex Name: Name of the building or apartment complex.
// Year Built: The year in which the apartment was built.
// Condition: The condition of the apartment (e.g., new, renovated, or used).
// Furnished: Indicates whether the apartment is furnished or unfurnished.
// Images/Photos: URLs or references to images or photos of the apartment.
// Contact Information: Contact details of the landlord or property manager.