const labelRightPadding = 5;
const labelPadding = 25;
const pixelToUnitRatio = 15;

export interface Point {
  x: number;
  y: number;
}

export interface AxisDetails {
  origin: Point;
  endOfX: Point;
  endOfY: Point;
}

export function readyCanvas(canvasContext: CanvasRenderingContext2D) {
  canvasContext.canvas.style.width = "100%";
  canvasContext.canvas.style.height = "100%";
  canvasContext.canvas.width = canvasContext.canvas.offsetWidth;
  canvasContext.canvas.height = canvasContext.canvas.offsetHeight;
  canvasContext.strokeStyle = "#F8F8F8";
}

export function getAxisDetails(
  canvasContext: CanvasRenderingContext2D
): AxisDetails {
  const height = canvasContext.canvas.height;
  const width = canvasContext.canvas.width;
  const origin: Point = { x: labelPadding, y: height - labelPadding };
  const endOfX: Point = { x: width - labelPadding, y: origin.y };
  const endOfY: Point = { x: origin.x, y: labelPadding };
  return { origin, endOfX, endOfY };
}

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
