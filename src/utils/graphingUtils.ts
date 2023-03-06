import { Point, Line, AxisDetails } from "src/utils/geometry";

const labelRightPadding = 5;
const labelPadding = 25;
const pixelToUnitRatio = 15;

export type CanvasCartesianTranslator = (point: Point) => Point;

function cartesianTranslatorFactory(
  axisDetails: AxisDetails
): CanvasCartesianTranslator {
  return (point: Point): Point => {
    const chartX = axisDetails.origin.x + point.x * pixelToUnitRatio;
    const chartY = axisDetails.origin.y - point.y * pixelToUnitRatio;
    return { x: chartX, y: chartY };
  };
}

export function readyCanvas(canvasContext: CanvasRenderingContext2D): void {
  canvasContext.canvas.style.width = "100%";
  canvasContext.canvas.style.height = "100%";
  canvasContext.canvas.width = canvasContext.canvas.offsetWidth;
  canvasContext.canvas.height = canvasContext.canvas.offsetHeight;
  canvasContext.strokeStyle = "#F8F8F8";
}

function getAxisDetails(
  canvasContext: CanvasRenderingContext2D,
  offset: Point
): AxisDetails {
  const height = canvasContext.canvas.height;
  const width = canvasContext.canvas.width;
  const canvasUpperLeftCorner: Point = { x: labelPadding, y: labelPadding };
  const canvasLowerLeftCorner: Point = {
    x: labelPadding,
    y: height - labelPadding,
  };
  const canvasUpperRightCorner: Point = {
    x: width - labelPadding,
    y: labelPadding,
  };
  const canvasLowerRightCorner: Point = {
    x: width - labelPadding,
    y: height - labelPadding,
  };

  const middleOfGraph: Point = {
    x: (canvasUpperRightCorner.x - canvasUpperLeftCorner.x) / 2,
    y: (canvasLowerRightCorner.y - canvasUpperRightCorner.y) / 2,
  };

  /* Intuition:
   * Origin should be on the middle of the canvas, but the offset accounts for any movement of the graph base
   * when offset is such that we are 2 units right, this essentially means our graph's origin will start 2 units
   * to the left of original, offset x +ve means right scrolled graph. Simillarly an offset y +v means we have scrolled upwards.
   */
  const origin: Point = {
    x: middleOfGraph.x - offset.x,
    y: middleOfGraph.y - offset.y,
  };

  const x: Line = {
    start: { x: canvasUpperLeftCorner.x, y: origin.y },
    end: { x: canvasUpperRightCorner.x, y: origin.y },
  };

  const y: Line = {
    start: { x: origin.x, y: canvasUpperLeftCorner.y },
    end: { x: origin.y, y: canvasLowerLeftCorner.y },
  };

  return { origin, x, y };
}

export function getGraphFromCanvas(
  canvasContext: CanvasRenderingContext2D,
  offset: Point
): [AxisDetails, CanvasCartesianTranslator] {
  const axisDetails = getAxisDetails(canvasContext, offset);
  const cct = cartesianTranslatorFactory(axisDetails);
  return [axisDetails, cct];
}

// Given axis details and a canvas, draw out X and Y axis
export function drawAxis(
  canvasContext: CanvasRenderingContext2D,
  axisDetails: AxisDetails
) {
  canvasContext.strokeStyle = "black";

  // x-axis
  canvasContext.beginPath();
  canvasContext.moveTo(axisDetails.origin.x, axisDetails.origin.y);
  canvasContext.lineTo(axisDetails.endOfX.x, axisDetails.endOfX.y);
  canvasContext.stroke();

  // y-axis
  canvasContext.beginPath();
  canvasContext.moveTo(axisDetails.origin.x, axisDetails.origin.y);
  canvasContext.lineTo(axisDetails.endOfY.x, axisDetails.endOfY.y);
  canvasContext.stroke();
}

function euclideanDistance(p1: Point, p2: Point) {
  return ((p2.y - p1.y) ** 2 + (p2.x - p1.x) ** 2) ** 0.5;
}

/*
 * Draws a muted grid on the canvas passed as a paramter.
 * */
export function drawMutedGrid(
  canvasContext: CanvasRenderingContext2D,
  axisDetails: AxisDetails
) {
  const yAxisLen = euclideanDistance(axisDetails.origin, axisDetails.endOfY);
  const xAxisLen = euclideanDistance(axisDetails.origin, axisDetails.endOfX);

  const numRows = yAxisLen / pixelToUnitRatio;
  const numCols = xAxisLen / pixelToUnitRatio;

  const dy = pixelToUnitRatio;
  const dx = pixelToUnitRatio;

  // draw rows
  for (let rowNum = 0; rowNum < numRows; rowNum++) {
    const offset = axisDetails.endOfY.y;
    const rowPos = rowNum * dy;
    canvasContext.beginPath();
    canvasContext.moveTo(axisDetails.origin.x, rowPos + offset);
    canvasContext.lineTo(axisDetails.endOfX.x, rowPos + offset);
    canvasContext.stroke();
  }

  // for cols
  for (let colNum = 0; colNum < numCols; colNum++) {
    const offset = axisDetails.origin.x;
    const columnPos = colNum * dx;
    canvasContext.beginPath();
    canvasContext.moveTo(offset + columnPos, axisDetails.origin.y);
    canvasContext.lineTo(offset + columnPos, axisDetails.endOfY.y);
    canvasContext.stroke();
  }
}

// Given a canvas, and axis details draw a number line along Y that fits the screen and labelPadding
export function drawYNumberLine(
  canvasContext: CanvasRenderingContext2D,
  axisDetails: AxisDetails
) {
  const yLen = euclideanDistance(axisDetails.origin, axisDetails.endOfY);
  const numbersOnLine = yLen / pixelToUnitRatio;
  for (let num = 0; num < numbersOnLine; num++) {
    const numTextX = axisDetails.origin.x - labelPadding + labelRightPadding;
    const numTextY = axisDetails.origin.y - num * pixelToUnitRatio;
    canvasContext.fillText(`${num}`, numTextX, numTextY);
  }
}
