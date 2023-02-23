import { useRef, useEffect } from "react";
import { drawMutedGrid, readyCanvas } from "utils/graphingUtils";

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

    readyCanvas(ctx);
    drawMutedGrid(ctx);

    // make axis
    const height = ctx.canvas.height;
    const width = ctx.canvas.width;
    const labelPadding = 25;
    ctx.strokeStyle = "black";
    // x-axis
    ctx.beginPath();
    ctx.moveTo(labelPadding, height - labelPadding);
    ctx.lineTo(width - labelPadding, height - labelPadding);
    ctx.stroke();

    // y-axis
    ctx.beginPath();
    ctx.moveTo(labelPadding, height - labelPadding);
    ctx.lineTo(labelPadding, labelPadding);
    ctx.stroke();
    // overlay data on graph
  }, []);

  return (
    <>
      <canvas ref={graphCanRef}></canvas>
    </>
  );
}
