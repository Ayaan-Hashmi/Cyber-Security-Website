import React from "react";
import Globe from "react-globe.gl";
import { useEffect, useRef, useState } from "react";
import globeJson from "../assets/countriesJson.json";
import HEX from "../assets/hex-globe-render.jpg";
function globe() {
  // const canvasRef = useRef();

  // useEffect(() => {
  //   let phi = 0;

  //   const globe = createGlobe(canvasRef.current, {
  //     devicePixelRatio: 3,
  //     width: 900 * 2,
  //     height: 900 * 2,
  //     phi: 0,
  //     theta: 0,
  //     dark: 1,
  //     diffuse: 1.2,
  //     mapSamples: 10000,
  //     mapBrightness: 10,
  //     baseColor: [0.3, 0.3, 0.3],
  //     markerColor: [1, 0, 0],
  //     glowColor: [0.6, 0.8, 1], // Light blue
  //     opacity: 0.9,
  //     markers: [
  //       // longitude latitude
  //       { location: [28.6139, 77.209], size: 0.1 }, // Delhi, India
  //       { location: [-25.7479, 28.2293], size: 0.1 }, // Pretoria, South Africa
  //       { location: [40.7128, -74.006], size: 0.1 }, // New York, USA
  //       { location: [37.5665, 126.978], size: 0.1 }, // Seoul, South Korea
  //       { location: [35.6895, 139.6917], size: 0.1 }, // Tokyo, Japan
  //       { location: [1.3521, 103.8198], size: 0.1 }, // Singapore
  //       { location: [-37.8136, 144.9631], size: 0.1 }, // Melbourne, Australia
  //       { location: [-36.8485, 174.7633], size: 0.1 }, // Auckland, New Zealand
  //       { location: [51.5074, -0.1278], size: 0.1 }, // London, United Kingdom
  //       { location: [36.7372, 3.0865], size: 0.1 }, // Algiers, Algeria
  //       { location: [-15.8267, -47.9218], size: 0.1 }, // Brasília, Brazil
  //       { location: [4.711, -74.0721], size: 0.1 }, // Bogotá, Colombia
  //       { location: [47.8864, 106.9057], size: 0.1 }, // Ulaanbaatar, Mongolia
  //       { location: [39.9334, 32.8597], size: 0.1 }, // Ankara, Turkey
  //       { location: [37.9838, 23.7275], size: 0.1 }, // Athens, Greece
  //       { location: [55.7558, 37.6173], size: 0.1 }, // Moscow, Russia
  //       { location: [55.0084, 82.9357], size: 0.1 }, // Novosibirsk, Siberia
  //       { location: [40.4168, -3.7038], size: 0.1 }, // Madrid, Spain
  //       { location: [52.52, 13.405], size: 0.1 }, // Berlin, Germany
  //       { location: [48.8566, 2.3522], size: 0.1 }, // Paris, France
  //       { location: [41.9028, 12.4964], size: 0.1 }, // Rome, Italy
  //       { location: [48.2082, 16.3738], size: 0.1 }, // Vienna, Austria
  //       { location: [50.8503, 4.3517], size: 0.1 }, // Brussels, Belgium
  //       { location: [52.3676, 4.9041], size: 0.1 }, // Amsterdam, Netherlands

  //       { location: [38.7223, -9.1393], size: 0.1 }, // Lisbon, Portugal

  //       { location: [60.1695, 24.9354], size: 0.1 }, // Helsinki, Finland
  //       { location: [53.3498, -6.2603], size: 0.1 }, // Dublin, Ireland
  //     ],
  //     onRender: (state) => {
  //       // Called on every animation frame.
  //       // `state` will be an empty object, return updated params.
  //       state.phi = phi;
  //       phi += 0.005;
  //     },
  //   });

  //   return () => {
  //     globe.destroy();
  //   };
  // }, []);

  const globeEl = useRef();

  // Example data generation
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
  const myData = [
    {
      lat: 29.953204744601763,
      lng: -90.08925929478903,
      altitude: 0.4,
      color: "#00ff33",
    },
    {
      lat: 28.621322361013092,
      lng: 77.20347613099612,
      altitude: 0.4,
      color: "#ff0000",
    },
    {
      lat: -43.1571459086602,
      lng: 172.72338919659848,
      altitude: 0.4,
      color: "#ffff00",
    },
  ];
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
