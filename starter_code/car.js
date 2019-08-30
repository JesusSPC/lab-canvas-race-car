class Car {
  constructor(ctx, x, y){
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.car1 = new Image();
    this.car1.src = "./images/car.png";
    this.car1.onload = () => {
      this.drawCar();
    };
  }
  
  drawCar() {
    this.ctx.drawImage(
      this.car1,
      this.x,
      this.y
    );

  }

  moveCar() {
    window.onkeydown = function(e) {
      switch (e.key) {
        case "ArrowLeft":
          car1.moveCarLeft();
          break;
        case "ArrowRight":
          car1.moveCarRight();
          break;
      }
    }
  }

  moveCarLeft() {
    this.x -= speed;
    ctx.clearRect(0, 0, w, h);
    this.drawCar();
  }

  moveCarRight() {
    this.x += speed;
    ctx.clearRect(0, 0, w, h);
    this.drawCar();
  }
}
