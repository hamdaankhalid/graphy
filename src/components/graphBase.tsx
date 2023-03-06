import { useRef, useEffect } from "react";
import {
  drawAxis,
  drawMutedGrid,
  drawYNumberLine,
  getGraphFromCanvas,
  readyCanvas,
  Offset,
} from "src/utils/graphingUtils";

/*
 * Graph component can be drawn on
 * can be moved left, right, up, down
 * has an axis drawn before hand.
 * */
export default function GraphBase() {
  const graphCanRef = useRef(null);
  // start offset from the middle
  const currentOffset: Offset = { x: 0, y: 0 };

  useEffect(() => {
    const graphCan = graphCanRef.current;
    const ctx = graphCan.getContext("2d");

    // TODO: this has to be w.r.t offset
    const [axisDetails, cartesianToPixelTranslator] = getGraphFromCanvas(ctx);

    readyCanvas(ctx);
    drawMutedGrid(ctx, axisDetails);

    // TODO: this has to be w.r.t offset
    drawYNumberLine(ctx, axisDetails); // only if already existing
    drawAxis(ctx, axisDetails); // only if already existing
  }, [currentOffset]);

  return (
    <>
      <div>
        <button>Up</button>
        <button>Left</button>
        <button>Right</button>
        <button>Up</button>
      </div>

      <canvas ref={graphCanRef}> </canvas>
    </>
  );
}
