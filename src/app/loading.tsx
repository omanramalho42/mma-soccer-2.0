import React from "react"
import Image from "next/image"

export default function Loading () {
    return (
        <div className="flex justify-center items-center">
            <Image 
                className="w-full h-full bg-contain bg-no-repeat"
                width={100} 
                height={100} 
                src="/assets/images/cards/loading-boll.gif" 
                alt="Loading..." 
            />
        </div>
    );
};
  