import { useRef, useEffect } from "react";
import {
  drawAxis,
  drawMutedGrid,
  drawYNumberLine,
  getGraphFromCanvas,
  readyCanvas,
} from "src/utils/graphingUtils";

interface ScatterPlotArgs {
  xData: Array<number>;
  yDatas: Array<Array<number>>;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function ScatterPlot({ xData, yDatas }: ScatterPlotArgs) {
  const graphCanRef = useRef(null);

  useEffect(() => {
    const graphCan = graphCanRef.current;
    const ctx = graphCan.getContext("2d");
    const [axisDetails, cartesianToPixelTranslator] = getGraphFromCanvas(ctx);

    readyCanvas(ctx);
    drawMutedGrid(ctx, axisDetails);
    drawYNumberLine(ctx, axisDetails);
    drawAxis(ctx, axisDetails);

    yDatas.forEach((yData) => {
      const color = getRandomColor();
      for (let i = 0; i < yData.length; i++) {
        const { x, y } = cartesianToPixelTranslator({
          x: xData[i],
          y: yData[i],
        });
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 3, 3);
      }
    });
  }, [yDatas, xData]); // we should also rerender if screen size changes :/

  return (
    <>
      <canvas ref={graphCanRef}></canvas>
    </>
  );
}
