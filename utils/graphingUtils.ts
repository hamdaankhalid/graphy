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
  const padding = 30;
  const height = canvasContext.canvas.height - padding;
  const width = canvasContext.canvas.width - padding;

  // we want to set these such that every interscetion creates a square not rect
  // 5 pixel is worth 1 unit?
  const numRows = height / 15;
  const numCols = width / 15;

  const dy = height / numRows;
  const dx = width / numCols;

  // draw rows
  for (let row = 0; row < numRows; row++) {
    canvasContext.beginPath();
    canvasContext.moveTo(padding, padding + row * dy);
    canvasContext.lineTo(width, padding + row * dy);
    canvasContext.stroke();
  }

  // for cols
  for (let col = 0; col < numCols; col++) {
    canvasContext.beginPath();
    canvasContext.moveTo(padding + col * dx, padding);
    canvasContext.lineTo(padding + col * dx, height);
    canvasContext.stroke();
  }
}
