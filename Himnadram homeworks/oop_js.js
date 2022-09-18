console.log("Array Implemetation");
{  
   class array{
    constructor(array, ...element){
        this.array = array;
        this.element = element;
    }
    ArrayLength(array, ...element){
        let boo = arr.Push(...element);
        boo--;
        return boo;
    }
    Push() {
        this.array[this.array.length] = this.element;  
        let l = this.array.length + this.element.length;
        return l;
    }
    Pop() {
        let getLast = this.element;
        return getLast[getLast.length - 1];
    }
    Shift() {
        let getFirst = this.array;
        return getFirst[0];
    }
    Unshift() {
        return arr.ArrayLength();
       //return this.array.length + this.element.length;
    }
   }
   let arr = new array([1,2,3],5,6,7,9);
   console.log(arr.Push());
   console.log(arr.Pop());
   console.log(arr.Shift());
   console.log(arr.Unshift());
   console.log(arr.ArrayLength());
}
console.log("Triangle, Pyramid");
{
    class triangle { 
        constructor(a,b,c){
            this.a = a;
            this.b = b;
            this.c = c;
        }
        area() {
           let s = (this.a + this.b + this.c) / 2;
           let areaValue =  Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
           return s; 
        }
    }
    class pyramid extends triangle {
       constructor(a, b, c, h){
        super(a, b, c);
        this.h = h;
       }
       pyramidArea () {
         let r = (this.a + this.b - this.c) / 2;
         let p = this.a + this.b + this.c;
         let s = (p * (r + this.h)) / 2
         return s;
       }
       pyramidVolume () {
        let v = (this.area() / 3) * this.h;
        return v;
       }

    }
    let t = new triangle(3,4,5);
    console.log(t.area()); 
    let p = new pyramid(3,4,5,2)
    console.log(p.pyramidArea());
    console.log(p.pyramidVolume());
}

