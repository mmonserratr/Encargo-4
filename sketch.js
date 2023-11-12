let angleSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Crea un deslizador para controlar el ángulo
  angleSlider = createSlider(0, TWO_PI, PI / 6, 0.01);
  angleSlider.position(10, height + 10);
  angleSlider.style('width', '80px');
}

function draw() {
  background(200, 0, 0);

  // Obtiene el valor actual del deslizador
  angle = angleSlider.value();

  snowflake(width / 2, height / 2, 200);
}

function snowflake(x, y, len) {
  // Dibuja un copo de nieve en la posición (x, y) y con longitud len
  stroke(255);
  noFill();
  drawFractal(x, y, len);
}

function drawFractal(x, y, len) {
  if (len < 1) {
    return;
  }

  // Dibuja una rama del copo de nieve
  let angleIncrement = TWO_PI / 6;
  for (let i = 0; i < 6; i++) {
    let newX = x + len * cos(i * angle + angleIncrement * i);
    let newY = y + len * sin(i * angle + angleIncrement * i);
    line(x, y, newX, newY);
    drawFractal(newX, newY, len / 3);
  }
}