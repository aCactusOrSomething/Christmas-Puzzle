import 'dart:html';


/* im not too sure about the limitations of canvas
but im gonna try my best.
can i go based on color? if the mouse is touching BLACK it's bad?
1. set up canvas
2. set up squares
3. set up line drawing
4. set up collision for squares
5. set up collision for lines
6. set up win detection (its up to you to find a way to cheat enough to get there :p)
 */

CanvasElement canvas;

DivElement div;
final int WIDTH = 1200;
final int HEIGHT = 800;

int wBuild;
int hBuild;
List<List<bool>> connections;
void main() {
  wBuild = WIDTH ~/ 7;
  hBuild = HEIGHT ~/ 5;
                 //1       2      3
  connections = [[false, false, false],//4
                 [false, false, false],//5
                 [false, false, false]];//6
  div = querySelector('#output');

  //canvas
  canvas = new CanvasElement(width: WIDTH, height: HEIGHT);
  CanvasRenderingContext2D ctx = canvas.context2D;
  ctx.setFillColorRgb(255, 255, 255, 255);
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  //draw houses
  drawHouses(ctx);
  //append canvas to div
  div.append(canvas);

  canvas.onMouseDown.listen((e) => drawMouseDown(ctx, event:e));
  canvas.onMouseMove.listen((e) => drawMouseMove(ctx, event:e));
  canvas.onMouseUp.listen((e) => drawMouseUp(ctx, event:e));
}

/*
doing random colors from sburbsims mind palette

*/
void drawHouses(CanvasRenderingContext2D ctx) {
  ctx.setFillColorRgb(61, 163, 90);
  ctx.fillRect(WIDTH/7, HEIGHT/5, WIDTH/7, HEIGHT/5);

  ctx.setFillColorRgb(46, 122, 67);
  ctx.fillRect(WIDTH*3/7, HEIGHT/5, WIDTH/7, HEIGHT/5);

  ctx.setFillColorRgb(4, 168, 133);
  ctx.fillRect(WIDTH*5/7, HEIGHT/5, WIDTH/7, HEIGHT/5);

  ctx.setFillColorRgb(29, 87, 46);
  ctx.fillRect(WIDTH/7, HEIGHT*3/5, WIDTH/7, HEIGHT/5);

  ctx.setFillColorRgb(22, 69, 36);
  ctx.fillRect(WIDTH*3/7, HEIGHT*3/5, WIDTH/7, HEIGHT/5);

  ctx.setFillColorRgb(6, 255, 201);
  ctx.fillRect(WIDTH*5/7, HEIGHT*3/5, WIDTH/7, HEIGHT/5);
}
/* thank you stack overflow,, very cool
https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse

  Here's the most straightforward way to create a drawing application with canvas:
  Attach a mousedown, mousemove, and mouseup event listener to the canvas DOM
  on mousedown, get the mouse coordinates, and use the moveTo() method to position your drawing cursor and the beginPath() method to begin a new drawing path.
  on mousemove, continuously add a new point to the path with lineTo(), and color the last segment with stroke().
  on mouseup, set a flag to disable the drawing.
  From there, you can add all kinds of other features like giving the user the ability to choose a line thickness, color, brush strokes, and even layers.
 */

bool isDrawing = false;
int startingSpace = 0;
void drawMouseDown(CanvasRenderingContext2D ctx, {MouseEvent event}) {
  startingSpace = determineBox(event.client.x, event.client.y, ctx);
  ctx.setStrokeColorRgb(0,0,0); //dont mindify this color its pretty visible
  if(startingSpace > 0 && startingSpace <= 6) {
    ctx.moveTo(event.client.x, event.client.y);
    ctx.beginPath();
    isDrawing = true;
  }
}

bool disqualified = false;
void drawMouseMove(CanvasRenderingContext2D ctx, {MouseEvent event}) {
  if(isDrawing == true) {
    ImageData imageData = ctx.getImageData(event.client.x, event.client.y, 1, 1);

    int numTrue = 0;
    for(int i = 0; i < 3; i++) {
      if (imageData.data[i] == 0) {
        numTrue++;
      }
    }
    if(numTrue >= 3) {
      print("collision detected!!!");
      window.alert("It seems you crossed the lines. please restart to try again.");
      disqualified = true;
    }
    ctx.lineTo(event.client.x, event.client.y);
    ctx.stroke();
  }
}

void drawMouseUp(CanvasRenderingContext2D ctx, {MouseEvent event}) {
  isDrawing = false;
  int endSpace = determineBox(event.client.x, event.client.y, ctx);
  if(endSpace != 0 && startingSpace != 0) {
    if (startingSpace <= 3) {
      connections[startingSpace-1][endSpace-4] = true;
    } else {
      connections[startingSpace-4][endSpace-1] = true;
    }
  }

  endSpace = 0;
  startingSpace = 0;

  if(checkForWin() == true) {
    print("you win!!!");
    window.alert("You Win!!!");
  }
}

int determineBox(int x, int y, CanvasRenderingContext2D ctx) {
  //WIDTH/7, HEIGHT/5
  if(y >= HEIGHT/5 && y < HEIGHT*2/5) {
    if (x >= WIDTH/7 && x < WIDTH*2/7) {
      return 1;
    } else if (x >= WIDTH*3/7 && x < WIDTH*4/7) {
      return 2;
    } else if (x >= WIDTH*5/7 && x < WIDTH*6/7) {
      return 3;
    }
  }else if(y >= HEIGHT*3/5 && y < HEIGHT*4/5) {
    if (x >= WIDTH/7 && x < WIDTH*2/7) {
      return 4;
    } else if (x >= WIDTH*3/7 && x < WIDTH*4/7) {
      return 5;
    } else if (x >= WIDTH*5/7 && x < WIDTH*6/7) {
      return 6;
    }
  }
  return 0;
}

//iterate through connections and print something if theyre all true

bool checkForWin() {
  print(connections);
  if(disqualified) return false;
  for(int i = 0; i < 3; i++) {
    for(int j = 0; j < 3; j++) {
      if(connections[i][j] == false) return false;
    }
  }
  return true;
}