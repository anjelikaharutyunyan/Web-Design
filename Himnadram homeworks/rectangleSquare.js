class Rectangle{
   constructor(width,length){
      this.width = width;
      this.length = length;
   }
   Area(){
      let s = this.width * this.length;
      return s;
   }
   Perimeter(){
      let p = (this.width + this.length) * 2;
      return p;
   }
}
class Square extends Rectangle{
 constructor(length){
   super(length,length);
  
   }
 }
let Rec = new Rectangle(2,3);
console.log("Area of Rectangle =",Rec.Area());
console.log("Perimeter of Rectangle =",Rec.Perimeter());

let sq = new Square(2,2);
console.log("Area of Square =",sq.Area());
console.log("Perimeter of Square =",sq.Perimeter());