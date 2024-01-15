import React from "react";
import { paths } from "@/lib/paths";
import clsx from "clsx";

type Props = {
  activeId: string | null;
  handleReset: () => void;
};

export default function Details({ handleReset, activeId }: Props) {
  const selectedPath = paths.find((path) => path.id === activeId);
  if (!selectedPath) {
    return;
  }
  return (
    <div className="rounded-md max-w-3xl text-neutral-900 absolute bottom-4 left-4 shadow-md bg-white w-full p-8">
      <button
        onClick={handleReset}
        className="absolute right-0 transition top-0 cursor-pointer rounded-md bg-neutral-50 hover:bg-neutral-100 p-2 flex items-center justify-center w-11 h-11"
      >
        x
      </button>
      <h2 className={clsx("text-3xl mb-4", `heading--${selectedPath.color}`)}>
        {selectedPath.title}
      </h2>
      <div className="space-y-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum
          possimus exercitationem officiis aliquid quaerat error. Optio
          voluptate numquam nulla?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum
          possimus exercitationem officiis aliquid quaerat error. Optio
          voluptate numquam nulla?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi id
          dolorum quaerat suscipit asperiores recusandae. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Odit rem vero sapiente minus
          dolorum tenetur quasi? Nulla aperiam veritatis rerum aliquid optio
          sunt suscipit quas?
        </p>
      </div>
    </div>
  );
}
