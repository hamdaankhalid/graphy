export interface Point {
  x: number;
  y: number;
}

export interface Line {
  start: Point;
  end: Point;
}

export interface AxisDetails {
  origin: Point;
  x: Line;
  y: Line;
}

export function euclideanDistance(p1: Point, p2: Point) {
  return ((p2.y - p1.y) ** 2 + (p2.x - p1.x) ** 2) ** 0.5;
}

export type CanvasCartesianTranslator = (point: Point) => Point;

// returns a cartesian to chartX, chartY conversion function
export function cartesianTranslatorFactory(
  axisDetails: AxisDetails,
  pixelToUnitRatio: number
): CanvasCartesianTranslator {
  return (point: Point): Point => {
    const chartX = axisDetails.origin.x + point.x * pixelToUnitRatio;
    const chartY = axisDetails.origin.y - point.y * pixelToUnitRatio;
    return { x: chartX, y: chartY };
  };
}
