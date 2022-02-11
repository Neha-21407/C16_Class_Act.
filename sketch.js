var box1, box2;

function setup(){
  createCanvas(400, 400);


  //calling the class OR creating object of the class
  box1 = new Box();
  box2 = new Box();
}

function draw() {
  background(220);

  box1.color = "green";
  box1.display();
  box1.speed(3);

  box2.display();
  box2.speed(-5);

}

