import { paths } from "@/lib/paths";
import clsx from "clsx";
import React from "react";

export default function Map({ handleZoom, activeId, handleReset }) {
    const handlePathClick = (id) => {
        activeId !== id ? handleZoom(id) : handleReset()
    }
  return (
    <svg
      className="w-full h-full max-h-screen"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1969.000000 1229.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,1229.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        {paths.map(({ id, color, title, d }) => (
          <path
            key={id}
            id={id}
            onClick={() => handlePathClick(id)}
            className={clsx(`zone zone--${color}`, { "active": activeId === id })}
            d={d}
            // title={title}
          />
        ))}
      </g>
    </svg>
  );
}
