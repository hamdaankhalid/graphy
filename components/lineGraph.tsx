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

    const axisDetails = getAxisDetails(ctx);

    readyCanvas(ctx);
    drawMutedGrid(ctx, axisDetails);
    drawYNumberLine(ctx, axisDetails);

    drawAxis(ctx, axisDetails);
    // overlay data on graph
  }, []);

  return (
    <>
      <canvas ref={graphCanRef}></canvas>
    </>
  );
}
