class Car {
  constructor(ctx){
    this.ctx = ctx;
    this.x = 80;
    this.y = 600;
    this.speed = 10;
    this.car = new Image();
    this.car.src = "./images/car.png";
    };
  
  drawCar() {
    this.ctx.drawImage(
      this.car,
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



class CarGame {
  constructor(){
    this.canvas = document.querySelector("#myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.w2 = this.w / 2;
    this.h2 = this.h / 2;
    this.intervalId = 0;
    this.counter = 0;

    this.car = new Car(this.ctx);
  }

  drawBackground() {
      this.ctx.fillStyle = `rgba(21, 136, 23, 1)`;
      this.ctx.fillRect(0, 0, this.w, this.h);
      
      this.ctx.fillStyle = `rgba(120, 120, 120, 1)`
      this.ctx.fillRect(30, 0, this.w - 60, this.h);
      
      this.ctx.fillStyle = `rgba(255, 255, 255, 1)`;
      this.ctx.fillRect(35, 0, 8, this.h);
      
      this.ctx.fillStyle = `rgba(255, 255, 255, 1)`;
      this.ctx.fillRect(this.w - 43, 0, 8, this.h);
      
    
      this.ctx.setLineDash([12, 8]);
      this.ctx.beginPath();
      this.ctx.strokeStyle = "White";
      this.ctx.lineWidth = 8;
      this.ctx.lineDashOffset = -this.counter;
      this.ctx.moveTo(this.w2 -4,0);
      this.ctx.lineTo(this.w2 - 4, this.h);
      this.ctx.stroke();
     
  }

  clearScreen() {
    this.ctx.clearRect(0, 0, this.w, this.h);
  }

  startGame() {
    this.intervalId = setInterval (() => {
      this.counter++;
      this.clearScreen();
      this.drawBackground();
    }, 1000/60)
  }

 

  stopGame() {
  }

    
}

let game = new CarGame();


document.getElementById("start-button").onclick = ()=> {
  game.startGame();
}
