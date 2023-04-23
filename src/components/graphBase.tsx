import { useRef, useEffect, useState } from "react";
import {
  drawAxis,
  drawMutedGrid,
  drawYNumberLine,
  getGraphFromCanvas,
  readyCanvas,
  getRandomColor,
} from "src/utils/graphingUtils";

/*
 * Graph component can be drawn on
 * can be moved left, right, up, down
 * has an axis drawn before hand.
 * */
export default function GraphBase({
  xData,
  yDatas,
}: {
  xData: Array<number>;
  yDatas: Array<{ data: Array<number>; color: string }>;
}) {
  const graphCanRef = useRef(null);
  // start initial offset from the middle
  const [currentOffset, setCurrentOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const mutateOffset = (x: number, y: number) => {
    return () => {
      setCurrentOffset({ x: currentOffset.x + x, y: currentOffset.y + y });
    };
  };

  useEffect(() => {
    const graphCan = graphCanRef.current;
    const ctx = graphCan.getContext("2d");
    if (!ctx) {
      return;
    }
    const [axisDetails, cartesianToPixelTranslator] = getGraphFromCanvas(
      ctx,
      currentOffset
    );
    readyCanvas(ctx);
    drawAxis(ctx, axisDetails);

    yDatas.forEach((yData) => {
      for (let i = 0; i < yData.data.length; i++) {
        const { x, y } = cartesianToPixelTranslator({
          x: xData[i],
          y: yData.data[i],
        });
        ctx.fillStyle = yData.color;
        ctx.fillRect(x, y, 3, 3);
      }
    });
  }, [currentOffset, xData, yDatas]);

  return (
    <>
      <div>
        <button onClick={mutateOffset(0, -15)}>Up</button>
        <button onClick={mutateOffset(-15, 0)}>Left</button>
        <button onClick={mutateOffset(15, 0)}>Right</button>
        <button onClick={mutateOffset(0, 15)}>Down</button>
      </div>

      <canvas ref={graphCanRef}> </canvas>
    </>
  );
}
