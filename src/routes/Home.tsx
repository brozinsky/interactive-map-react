import Controls from "@/components/modules/Controls";
import Details from "@/components/modules/Details";
import Map from "@/components/modules/Map";
import Panel from "@/components/modules/Panel";
import React, { useRef, useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
  useControls,
} from "react-zoom-pan-pinch";

export default function Root() {
  const [openDetails, setOpenDetails] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const transformWrapperRef = useRef<ReactZoomPanPinchRef>(null);

  const handleReset = () => {
    setOpenDetails(false);
    setActiveId(null);
    transformWrapperRef.current?.resetTransform();
  };
  const handleZoom = (id) => {
    setOpenDetails(true);
    setActiveId(id);
    transformWrapperRef.current?.zoomToElement(id);
  };
  return (
    <>
      <div className="w-full ">
        <TransformWrapper ref={transformWrapperRef}>
          <div className="">
            <div className="flex flex-row relative">
              <Controls />
              {activeId && (
                <button
                  onClick={handleReset}
                  className="z-50 bg-neutral-100 hover:bg-neutral-200 transition px-8 py-2 absolute top-2 right-8 mr-[260px] rounded-md text-black"
                >
                  Back
                </button>
              )}
              <TransformComponent>
                <Map
                  handleZoom={handleZoom}
                  handleReset={handleReset}
                  activeId={activeId}
                />
              </TransformComponent>
              {openDetails ? (
                <Details activeId={activeId} handleReset={handleReset} />
              ) : null}
              <Panel
                activeId={activeId}
                handleReset={handleReset}
                handleZoom={handleZoom}
              />
            </div>
          </div>
        </TransformWrapper>
      </div>
    </>
  );
}
