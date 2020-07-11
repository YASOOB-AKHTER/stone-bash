class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,100,100);
   
    this.Visiblity = 255;
  }

 display(){
   console.log(this.body.speed);
   fill("blue");
   if(this.body.speed < 1){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     rect( this.body.position.x, this.body.position.y, 100, 100);
     pop();
   }
   
 }



};