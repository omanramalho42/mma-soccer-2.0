import React from "react"
import Image from "next/image"

const LoadingScreen = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2 className="absolute top-[25%] z-[20]">Carregando...</h2>
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
  
  export default LoadingScreen;
  