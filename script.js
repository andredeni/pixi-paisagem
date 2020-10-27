const app = new PIXI.Application(
  { antialias: true }
);

document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();

// Retângulo Casa
graphics.lineStyle(3, 0xFFFFFF, 1);
graphics.beginFill(0);
graphics.drawRect(100, 300, 300, 200);
graphics.endFill();

// Retângulo Porta
graphics.lineStyle(0);
graphics.beginFill(0x963200);
graphics.drawRect(150, 400, 50, 100);
graphics.endFill();

// Retângulo Janela
graphics.lineStyle(0);
graphics.beginFill(0xCCCCFF);
graphics.drawRoundedRect(250, 370, 100, 70);
graphics.endFill();

// Círculo
graphics.lineStyle(0);
graphics.beginFill(0xFFFF00);
graphics.drawCircle(650, 150, 70);
graphics.endFill();

// Polígono
const path = [100, 300, 250, 200, 400, 300];

graphics.lineStyle(0);
graphics.beginFill(0xFF0000);
graphics.drawPolygon(path);
graphics.endFill();

app.stage.addChild(graphics);