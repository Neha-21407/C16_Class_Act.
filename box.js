class Box{
  //default function
  constructor(){
    //properties of the class (attributes)

    this.x = 130;
    this.y = 130;
    this.width = 40;
    this.height = 45;
    this.color = "red";
  }
  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
  speed(v){
    this.x = this.x+v;
  }
}

  
