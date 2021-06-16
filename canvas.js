var canvas = document. getElementById ('canvas') // Get canvas elements
let context = canvas. getContext ('2d'), // Get the drawing environment, specified as 2D
centerX = canvas.width/2, // Canvas central point X-axis coordinates
centerY =  canvas.height/2, // Canvas center point y axis coordinates
rad = Math. PI * 2/100, // / divide 360 degrees into 100 parts, then each part is rad degree.
speed = 0.1; // The speed of loading depends on it.

// Draw a blue outer ring
function blueCircle(n) {
  context.save();
  context.beginPath();
  context.strokeStyle = "#49f";
  context.lineWidth = 5;
  context.arc(centerX, centerY, 20, -Math.PI / 2, -Math.PI / 2 + n * rad, false);
  context.stroke();
  context.restore();
}

// Draw a white outer ring changed in blue&weight radius in arc 20 and linewidth to 5
function whiteCircle() {
  context.save();
  context.beginPath();
  context.strokeStyle = "#A5DEF1";
  context.lineWidth = 5;
  context.arc(centerX, centerY, 20, 0, Math.PI * 2, false);
  context.stroke();
  context.closePath();
  context.restore();
}

// Percentage Text Drawing
function text(n) {
  context.save();
  context.fillStyle = "#F47C7C";
  context.font = "10px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(n.toFixed(0) + "%", centerX, centerY);
  context.restore();
}

// Animation cycle
function drawFrame() {
  window.requestAnimationFrame(drawFrame, canvas);
  context.clearRect(0, 0, canvas.width, canvas.height);

  whiteCircle();
  text(speed);
  blueCircle(speed);

  if (speed > 100) speed = 0;
  speed += 0.1;
}
window.requestAnimationFrame(drawFrame, canvas);