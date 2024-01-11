import { show } from "@/models/show";
import React from "react";
import Image from "next/image";

const Show = (props: show) => {
  return (
    <>
      {!!props?.imageurl?.at(0) && (
        <div className="relative bg-white rounded-lg">
          <Image
            src={props.imageurl[0]}
            alt={props.title}
            width={1920}
            height={200}
            className="object-contain aspect-square"
          />
          
        </div>
      )}
    </>
  );
};

export default Show;
