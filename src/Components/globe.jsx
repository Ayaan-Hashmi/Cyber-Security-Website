import React from "react";
import Globe from "react-globe.gl";
import { useEffect, useRef, useState } from "react";
import globeJson from "../assets/countriesJson.json";
import HEX from "../assets/hex-globe-render.jpg";
function globe() {
  const globeEl = useRef();
  // random arcs data
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
      ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    ],
  }));

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().enableZoom = false;
    }
  }, []);
  return (
    <div>
      <Globe
        ref={globeEl}
        globeImageUrl={HEX}
        arcsData={arcsData}
        arcColor={"color"}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => Math.random() * 4000 + 500}
        height={700}
        width={800}
        backgroundColor="rgba(0,0,0,0)"
        className="mx-auto"
      />
    </div>
  );
}

export default globe;
