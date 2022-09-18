//2//
{
    console.log("Begin 2");
    let a = 3;
    const S = a**2;
    console.log("S =",S);
}
//4//
{
    console.log("\nBegin 4");
    let d = 3;
    const L = Math.PI * d;
    console.log("d =",d);
}
//6//
{
    console.log("\nBegin 6");
    let a = 3, b = 4, c = 7;
    const V = a * b * c;
    const S = 2*(a*b + b*c + a*c);
    console.log("V =",V, "\nS =",S);
}
//8//
{
    console.log("\nBegin 8");
    let a = 5, b = 9;
    const average = (a + b)/2;
    console.log("Average =", average);
}
//10//
{
    console.log("\nBegin 10");
    let num1 = 8, num2 = 6;
    const sum = num1**2 + num2**2;
    const diff = num1**2 - num2**2;
    const div = num1**2 / num2**2;
    const mult = num1**2 * num2**2;
    console.log("Sum =",sum, "\nDiff =",diff, "\nDiv =",div, "\nMult =",mult);
}
//12//
{
    console.log("\nBegin 12");
    let a = 5, b = 12;
    const c = Math.sqrt(a*a + b*b);
    const P = a + b + c;
    console.log("c =",c, "\nP =",P);
}
//14//
{
    console.log("\nBegin 14");
    let R = 4;
    const S = 3.14 * R**2;
    const L = 2 * 3.14 * R;
    console.log("R =",R, "\nS =",S);
}
//16//
{
    console.log("\nBegin 16");
    let x1 = 14, x2 = 6;
    const dist = Math.abs(x2 - x1);
    console.log("Distance =",dist);
}
//17//
{
    console.log("\nBegin 17");
    let A = 2, B = 10, C = 15;
    const AC = Math.abs(C - A);
    const BC = Math.abs(C - B);
    const sum = AC + BC;
    console.log( "AC =",AC, "BC =",BC, "\nSum =",sum);
}
//18//
{
    console.log("\nBegin 18");
    let A = 4, B = 18, C = 13;
    const mult = Math.abs((C - A)*(B - C));
    console.log("Mult =", mult);
}
//19//
{
    console.log("\nBegin 19");
    let x1 = 3, y1 = 5;
    let x2 = 6, y2 = 8;
    const S = Math.abs((x1 - x2) * (y1 - y2));
    const P = 2 * Math.abs((x1 - x2) + (y1 - y2));
    console.log("S =",S, "P =",P);
}
//20//
{
    console.log("\nBegin 20");
    let x1 = 2, y1 = 4;
    let x2 = 3, y2 = 8;
    const dist = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    console.log("Distance =",dist);
}
//21//
    let x1 = 2, y1 = 4;
    let x2 = 8, y2 = 6;
    let x3 = 3, y3 = 9;
    const a = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    const b = Math.sqrt((x2 - x3)**2 + (y2 - y3)**2);
    const c = Math.sqrt((x3 - x1)**2 + (y3 - y1)**2);
    const P = a + b + c;
    const S = Math.sqrt(P*(P - a) * (P - b) * (P - c));
    console.log("S =",S, "\nP =",P);
//22//
{
    console.log("\nBegin 22");
    let A = 2, B = 7;
    console.log("Before: A =",A, "B =",B);
    B = B - A;
    A = B + A;
    B = A - B;
    console.log("After: A =",A, "B =",B);
}
//23//
{
    console.log("\nBegin 23");
    let A = 8, B = 10, C = 12;
    console.log("Before: A =",A, "B =",B, "C =",C);
    A = A + B + C;
    B = A - B - C;
    C = A - B - C;
    A = A - B - C;
    console.log("After: A =",A, "B =",B, "C =",C);
}
//24//
{
    console.log("\nBegin 24");
    let A = 2, B = 4, C = 6;
    console.log("Before: A =",A, "B =",B, "C =",C);
    A = A + C;
    C = A - C;
    A = A - C;
    B = B + A;
    A = B - A;
    B = B - A;
    console.log("Before: A =",A, "B =",B, "C =",C);
}
//25//
{
    console.log("\nBegin 25");
    let x = 2;
    const func = 3 * Math.pow(x,6) - 6 * x*x - 7;
    console.log("Function =",func);
}