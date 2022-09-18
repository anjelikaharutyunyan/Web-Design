//16//
{
 function sign(x) {
        if(x < 0) console.log(-1);
        if(x === 0) console.log(0);
        if(x > 0) console.log(1);
    }
    sign(4);
}
//17//
{
 function rootsCount(a, b, c){
    const d = b*b - 4 * a * c;
    if(d > 0) console.log("2 roots");
    if(d === 0) console.log("1 root");
    if(d < 0) console.log("0 root");
 }
 rootsCount(2,5,6);
}
//18//
{
 function circleS(R){
    const S = 3.14 * R*R;
    console.log(S);
 }
 circleS(3);
}
//19//
{
 function ringS(r1, r2){
    if(r1 < r2) return false;
    else {
        const S = 3.14 * r1 * r2;
        console.log(S);
    }
 }
 ringS(7,3);
}
//20//
{
 function triangleP(a, h){
    const b = Math.sqrt((a/2)**2 + h*h);
    console.log(b);
 }
 triangleP(2,5);
}
//21//
{
 function sumRange(a, b){
    if(a > b) return 0;
    let sum = 0;
    for(let i = a; i <= b; i++){
        sum += i;
    }
    return sum;
 }
  let c = 7;
  console.log(sumRange(1,5));
  console.log(sumRange(5,c));
  
}
//22//
{
 function calc(a, b, op){
    switch(op){
        case 1: return a - b; break;
        case 2: return a + b; break;
        case 3: return a / b; break;
       default: return a * b; break;
    }
 }
let n1 = 1, n2 = 2, n3 = 5;
console.log(calc(1,4,n1));
console.log(calc(5,6,n2));
console.log(calc(7,8,n3));
}
//23//
{
 function quarter(x, y){
    if(x > 0 && y > 0) console.log("1 quarter");
    if(x < 0 && y > 0) console.log("2 quarter");
    if(x < 0 && y < 0) console.log("3 quarter");
    if(x > 0 && y < 0) console.log("4 quarter");
 }
 quarter(-8,4);
}
//24//
{
 function even(k){
    (k % 2 == 0)? console.log("true"): console.log("false");
 }
 even(3);
}
//25//
{
 function isSquare(k){
    (k == Math.pow(Math.sqrt(k),2))? console.log("true"): console.log("false");
 }
 isSquare(16);
}
//26//
{
let count = 0, bool = true, k1 = [12, 5, 25, 10, 625, 4, 1, 0, 7, 10];
let IsPower5 = (k) => {
    for(let j = 0;j < k.length; j++) {
        while (k[j] > 5) {
            k[j] = k[j] / 5;
        }
        if (k[j] % 5 == 0) {
            bool = true;
        }
        else { bool = false;}
        if (bool) { count++;}
}
return count;
}
console.log(IsPower5(k1));
}
//27//
{
    let count = 0, bool = true, k1 = [12, 5, 25, 10, 625, 4, 1, 0, 7, 10];
    let IsPowerN = (k, n) => {
        for(let j = 0; j < k.length; j++) {
            while (k[j] > n) {
                k[j] = k[j] / 5;
            }
            if (k[j] % 5 == 0) {
                bool = true;
            }
            else { bool = false;}
            if (bool) { count++;}
    }
    return count;
    }
    console.log(IsPowerN(k1,15));
}
//28//
{
    function IsPrime(n){
        if(n < 2)
        return `${n} is not a prime`
        for(let i = 2; i < Math.sqrt(n); i++){
            if(n % i === 0){
                return false;
            }
        }
        return true;
    }
    console.log(IsPrime(11));
}
//29//
{
 function digitCount(k){
     for(let i = 1; i <= 10; i++){
        k /= 10;
        return i;
     }
 }
    let k;
    for(let i = 1; i <= 5; i++){
        let k = [12,456,789,345,213,21];
    }
    console.log("count",digitCount(k));
}
