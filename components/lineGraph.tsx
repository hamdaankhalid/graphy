import { useRef, useEffect } from "react";
import {
  drawAxis,
  drawMutedGrid,
  drawYNumberLine,
  getAxisDetails,
  readyCanvas,
} from "utils/graphingUtils";

export interface LineGraphArgs {
  xLabel: string;
  yLabel: string;
  xData: Array<number>;
  yData: Array<number>;
}

export default function LineGraph({
  xData,
  yData,
  xLabel,
  yLabel,
}: LineGraphArgs) {
  const graphCanRef = useRef(null);

  useEffect(() => {
    const graphCan = graphCanRef.current;
    const ctx = graphCan.getContext("2d");

    const axisDetails = getAxisDetails(ctx); // Maybe this is where we should return a function that can draw something based on cartesian coordinates?

    readyCanvas(ctx);
    drawMutedGrid(ctx, axisDetails);
    drawYNumberLine(ctx, axisDetails);

    drawAxis(ctx, axisDetails);
    // overlay data on graph
    // render only what remains visible.
, []);

  return (
    <>
      <canvas ref={graphCanRef}></canvas>
    </>
  );
}
