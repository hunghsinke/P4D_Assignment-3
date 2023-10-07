let boulderX;
const boulderDiameter = 50;
const animationSpeed = 3;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('stones'); // Attach the canvas to the "stones" section
  boulderX = -boulderDiameter; // Start the boulder off the left side of the screen
}

function draw() {
  background(220);

  // Draw the ground
  fill(100, 100, 100);
  rect(0, height - 50, width, 50);

  // Draw the boulder
  fill(150, 75, 0);
  ellipse(boulderX, height - 75, boulderDiameter);

  // Update the boulder's position
  boulderX += animationSpeed;

  // Check if the boulder has rolled off the screen
  if (boulderX > width + boulderDiameter / 2) {
    boulderX = -boulderDiameter; // Reset the boulder to the left side
  }
}
