'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { 
    Apartment,
} from "@/app/actions/getApartment";

import Button from "../Button";

interface ListingCardProps {
  data: Apartment;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
};

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
}) => {
  const router = useRouter();

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (disabled) {
      return;
    }

    onAction?.(actionId)
  }, [disabled, onAction, actionId]);

 

  return (
    <div 
      onClick={() => router.push(`/listings/${data._id}`)} 
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div 
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data.image}
            alt="Listing"
          />
          <div className="
            absolute
            top-3
            right-3
          ">
          </div>
        </div>
        <div className="font-semibold text-lg">
          {data.title}, {data.address.city}
        </div>
        <div className="font-light text-neutral-500">
          {data.description}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">
            $ {data.price},
          </div>
          {data.area} m
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel} 
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
   );
}
 
export default ListingCard;