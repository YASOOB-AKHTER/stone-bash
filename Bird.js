class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,100,100);
    
  }

  display() {
    fill("yellow");
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    //console.log(this.body.velocity.x);
    
  
  }
}
