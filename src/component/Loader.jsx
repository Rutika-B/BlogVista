import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import useTheme from "../context/theme";

function Loader() {
    
    
  return (
    <div className="flex h-screen items-center justify-center">
        
      <RotatingLines
        
        strokeColor="yellow"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Loader;
