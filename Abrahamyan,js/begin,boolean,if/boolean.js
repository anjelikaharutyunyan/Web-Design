//1//
{
    console.log("Boolean 1");
    let A = 4;
    condition = (A > 0) ?  true : false;
    console.log(condition);
}
//2//
{
    console.log("\nBoolean 2");
    let A = 1;
    condition = ( A % 2 !== 0) ? true : false;
    console.log(condition);
}    
//3//
{
    console.log("\nBoolean 3");
    let A = 3;
    condition = ( A % 2 === 0) ? true : false;
    console.log(condition);
}
//4//
{
    console.log("\nBoolean 4");
    let A = 8, B = 7;
    condition = ((A > 2) && (B <= 3)) ? true : false;
    console.log(condition);
}
//5//
{
    console.log("\nBoolean 5");
    let A = 9, B = 5;
    condition = ((A >= 0) || (B < -2)) ? true : false;
    console.log(condition);
}
//6// 
{
    console.log("\nBoolean 6");
    let A = 4, B = 0, C = 1;
    condition = (( A < B) && (B < C)) ? true : false;
    console.log(condition); 
}
//7//
{
    console.log("\nBoolean 7");
    let A = 5, B = 0, C = 2;
    condition = ( (A < B) && (B < C)) ? true : false;
    console.log(condition); 
}
//8//
{
    console.log("\nBoolean 8");
    let A = 5, B = 7;
    condition = ((A % 2 !== 0) && (B % 2 !== 0)) ? true : false;
    console.log(condition);
}
//9//
{
    console.log("\nBoolean 9");
    let A = 6, B = 4;
    condition = ((A % 2 !== 0) && (B % 2 !== 0)) ? true : false;
    console.log(condition);
}
//10//
{
    console.log("\nBoolean 10");
    let A = 6, B = 4;
    condition = (((A % 2 !== 0) && (B % 2 == 0)) || (A % 2 == 0) && (B % 2 !== 0)) ? true : false;
    console.log(condition);
}
//11//
{
    console.log("\nBoolean 11");
    let A = 6, B = 4;
    condition = (((A % 2 == 0) && (B % 2 == 0)) || (A % 2 !== 0) && (B % 2 !== 0)) ? true : false;
    console.log(condition);
}
//12//
{
    console.log("\nBoolean 12");
    let A = 2, B = 3, C = -1;
    condition = ((A > 0) && (B > 0) && (C > 0)) ? true : false;
    console.log(condition);   
}
//13//
{
    console.log("\nBoolean 13");
    let A = 2, B = 3, C = -1;
    condition = ((A > 0) || (B > 0) || (C > 0)) ? true : false;
    console.log(condition);  
}
//14//
{
    console.log("\nBoolean 14");
    let A = 2, B = 3, C = -1;
    condition = (((A > 0) && (B < 0) && (C < 0)) || ((A < 0) && (B > 0) && (C < 0)) || ((A < 0) && (B < 0) && (C > 0))) ? true : false;
    console.log(condition);   
}
//15//
{
    console.log("\nBoolean 15");
    let A = 2, B = 3, C = -1;
    condition = (((A > 0) && (B > 0) && (C < 0)) || ((A < 0) && (B > 0) && (C > 0)) || ((A > 0) && (B < 0) && (C > 0))) ? true : false;
    console.log(condition);   
}
//16//
{
    console.log("\nBoolean 16");
    let A = 28;
    condition = ((A % 2 == 0) && (A > 9) && (A < 100)) ? true : false;
    console.log(condition);   
}
//17//
{
    console.log("\nBoolean 17");
    let A = 28;
    condition = ((A % 2 !== 0) && (A > 99) && (A < 1000)) ? true : false;
    console.log(condition);  
}
//18//
{
    console.log("\nBoolean 18");
    let A = 28, B = 3, C = 7;
    condition = ((A == B) || (A == C) || (B == C)) ? true : false;
    console.log(condition);  
}
//19//
{
    console.log("\nBoolean 19");
    let A = 28, B = 3, C = -3;
    condition = ((A == (-1)*B) || (A == (-1)*C) || (B == (-1)*C)) ? true : false;
    console.log(condition); 
}
//20//
{
    console.log("\nBoolean 20");
    let A = 28, B = 3, C = 3;
    condition = ((A !== B) && (B !== C) && (C !== A)) ? true : false;
    console.log(condition);  
}