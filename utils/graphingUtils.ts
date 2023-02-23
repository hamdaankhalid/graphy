export function readyCanvas(canvasContext: CanvasRenderingContext2D) {
  canvasContext.canvas.style.width = "100%";
  canvasContext.canvas.style.height = "100%";
  canvasContext.canvas.width = canvasContext.canvas.offsetWidth;
  canvasContext.canvas.height = canvasContext.canvas.offsetHeight;
  canvasContext.strokeStyle = "#F8F8F8";
}

/*
 * Draws a muted grid on the canvas passed as a paramter.
 * Scale is used to dtermine how many rows and columns should
 * be drawn on the grid
 * */
export function drawMutedGrid(canvasContext: CanvasRenderingContext2D) {
  const height = canvasContext.canvas.height;
  const width = canvasContext.canvas.width;

  const pixelToUnitRatio = 15;
  const numRows = height / pixelToUnitRatio;
  const numCols = width / pixelToUnitRatio;

  const dy = height / numRows;
  const dx = width / numCols;

  // draw rows
  for (let row = 0; row < numRows; row++) {
    canvasContext.beginPath();
    canvasContext.moveTo(0, row * dy);
    canvasContext.lineTo(width, row * dy);
    canvasContext.stroke();
  }

  // for cols
  for (let col = 0; col < numCols; col++) {
    canvasContext.beginPath();
    canvasContext.moveTo(col * dx, 0);
    canvasContext.lineTo(col * dx, height);
    canvasContext.stroke();
  }
}
