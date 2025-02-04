function Implement_Flood_Fill(canvasContext, startX, startY, oldColor, newColor) {
  if (oldColor === newColor) return;
  let queue = [];
  let width = canvasContext.canvas.width;
  let height = canvasContext.canvas.height;

  function floodFill(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    let currentColor = canvasContext.getImageData(x, y, 1, 1).data;
    if (rgbaToString(currentColor) !== oldColor) return;

    queue.push({ x: x, y: y });

    while (queue.length > 0) {
      let currentPoint = queue.shift();
      let x = currentPoint.x;
      let y = currentPoint.y;

      if (x < 0 || x >= width || y < 0 || y >= height) continue;
      if (rgbaToString(canvasContext.getImageData(x, y, 1, 1).data) !== oldColor) continue;

      canvasContext.fillStyle = newColor;
      canvasContext.fillRect(x, y, 1, 1);

      queue.push({ x: x + 1, y: y });
      queue.push({ x: x - 1, y: y });
      queue.push({ x: x, y: y + 1 });
      queue.push({ x: x, y: y - 1 });
    }
  }

  function rgbaToString(rgba) {
    return `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`;
  }

  let startColor = rgbaToString(canvasContext.getImageData(startX, startY, 1, 1).data);
  if (startColor === oldColor) {
    floodFill(startX, startY);
  }
}
