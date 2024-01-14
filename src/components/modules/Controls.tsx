import React from "react";
import { useControls } from "react-zoom-pan-pinch";

export default function Controls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="absolute left-4 top-2 flex flex-row gap-2">
      <button className="z-50 bg-neutral-100 hover:bg-neutral-200 px-8 py-2 rounded-md text-black" onClick={() => zoomIn()}>Zoom In</button>
      <button className="z-50 bg-neutral-100 hover:bg-neutral-200 px-8 py-2 rounded-md text-black" onClick={() => zoomOut()}>Zoom Out</button>
      <button className="z-50 bg-neutral-100 hover:bg-neutral-200 px-8 py-2 rounded-md text-black" onClick={() => resetTransform()}>Reset</button>
    </div>
  );
}
