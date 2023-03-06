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
