//1//
{
    console.log("If 1");
    let x = 9;
    if( x > 0){
        x++;
        console.log(x);
    }
    else{
        console.log(x);
    }
}
//2//
{
    console.log("\nIf 2");
    let x = -2;
    if (x > 0){
        x++;
        console.log(x);
    }
    else{
        x-=2;
        console.log(x);
    }
}
//3//
{
    console.log("\nIf 3");
    let x = 0;
    if (x > 0){
        x++;
        console.log(x);
    }
    else if( x < 0){
        x-=2;
        console.log(x);
    }
     else {
        x = 10;
        console.log(x);
    }
}
//4//
{
    console.log("\nIf 4");
    let num1 = 1, num2 = 2, num3 = -3;
    let n = 0;
    if(num1 > 0) n++;
    if(num2 > 0) n++;
    if(num3 > 0) n++;
    console.log(n);
}
//5//
{
    console.log("\nIf 5");
    let num1 = 1, num2 = 2, num3 = -3;
    let positive = 0, negative = 0;
    if( num1 > 0) positive++; else{ negative++};
    if( num2 > 0) positive++; else{ negative++};
    if( num3 > 0) positive++; else{ negative++};
    console.log("positive =",positive, "\nnegative =",negative);
}
//6//
{
    console.log("\nIf 6");
    let num1 = 3, num2 = 4;
    if( num1 > num2){
        console.log(num1);
    }
    else{
        console.log(num2);
    }
}
//7//
{
    console.log("\nIf 7");
    let num1 = 10, num2 = 9;
    if(num1 < num2){
        console.log(1);
    }
    else{
        console.log(2);
    }
}
//8//
{
    console.log("\nIf 8");
    let num1 = 10, num2 = 19;
    if(num1 < num2){
        console.log(num2,",",num1);
    }
    else{
        console.log(num1,",",num2);
    }
}
//9//
{
    console.log("\nIf 9");
    let A = 10, B = 19;
    console.log("Before: Firts =",A, "Second =",B);
    if ( A > B){  
        A = A + B;
        B = A - B;
        A = A - B;
        console.log("After: Fisrt =",A, "Second =",B);
    }
}
//10//
{
    console.log("\nIf 10");
    let A = 8, B = 8;
    if (A !== B){
        A = A + B;
        B = A;
        console.log("A =",A, "B =",B);
    }
    else{
        A = B = 0;
        console.log("A =",A, "B =",B);
    }

}