import React from "react";
import { paths } from "@/lib/paths";
import clsx from "clsx";

export default function Panel({ activeId, handleReset, handleZoom }) {
  let lastColor = null;
  return (
    <aside className="flex flex-col gap-4 max-h-screen overflow-auto shadow-md p-8">
      {paths.map(({ id, color, title }) => {
        const isNewCategory = color !== lastColor;
        lastColor = color; // Update the lastColor for the next iteration
        return (
          <div>
            {isNewCategory && (
              <p className={clsx("mt-8 category-title", `category-title--${color}`)}>
                Category name
              </p>
            )}
            <button
              type="button"
              className={clsx("zone-link", `zone-link--${color}`, {
                active: activeId === id,
              })}
              onClick={() => handleZoom(id)}
            >
              {title}
            </button>
          </div>
        );
      })}
    </aside>
  );
}
