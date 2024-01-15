import React, { useEffect, useRef } from "react";
import { paths } from "@/lib/paths";
import clsx from "clsx";

type Props = {
  activeId: string | null;
  handleZoom: (id: string) => void;
  handleReset: () => void;
};

type ButtonRefs = {
  [key: string]: React.RefObject<HTMLButtonElement>;
};

export default function Panel({ activeId, handleZoom, handleReset }: Props) {
  let lastColor: string | null = null;
  const buttonRefs = useRef<ButtonRefs>({});

  useEffect(() => {
    if (activeId && buttonRefs.current[activeId]) {
      const activeButton = buttonRefs.current[activeId].current;
      if (activeButton && activeButton.scrollIntoView) {
        activeButton.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [activeId]);

  const handleLinkClick = (id: string) => {
    console.log(activeId == id);
    activeId !== id ? handleZoom(id) : handleReset();
  };

  return (
    <aside className="flex flex-col gap-4 max-h-screen overflow-auto shadow-md p-8">
      {paths.map(({ id, color, title }) => {
        const isNewCategory = color !== lastColor;
        lastColor = color;

        if (!buttonRefs.current[id]) {
          buttonRefs.current[id] = React.createRef();
        }

        return (
          <div key={id}>
            {isNewCategory && (
              <p
                className={clsx(
                  "mt-8 category-title",
                  `category-title--${color}`
                )}
              >
                Category name
              </p>
            )}
            <button
              ref={buttonRefs.current[id]}
              type="button"
              className={clsx("zone-link", `zone-link--${color}`, {
                active: activeId === id,
              })}
              onClick={() => handleLinkClick(id)}
            >
              {title}
            </button>
          </div>
        );
      })}
    </aside>
  );
}
