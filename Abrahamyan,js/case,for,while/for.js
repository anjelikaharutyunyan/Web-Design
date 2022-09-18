//1//
{
    console.log("\nFor 1")
    let n = 5, k = 2;
    for (let i = 0; i < n; i++) {
        console.log(k);
    } 
}

//2//
{
    console.log("\nFor 2")
    let a = 5, b = 8;
    for (let i = a; i <= b; i++) {
        console.log( a + b - 1);
    } 
}

//3//
{
    console.log("\nFor 3")
    let a = 5, b = 8;
    for (let i = b - 1; i > a; i--) {
        console.log( b - a - 1);
    } 
}

//4//
{
    console.log("\nFor 4")
    let cost = 200;
    for (let i = 1; i <= 10; i++) {
        console.log(i,"kg = ", cost * i);
    } 
}

//5/
{
    console.log("\nFor 5")
    let c = 200, m = 3;
    for (let m = 0.1; m < 1.1; m+= 0.1) {
        console.log(m,"kg = ",c * m);
    } 
}

//6//
{
    console.log("\nFor 6")
    let c = 200, m = 3;
    for (let m = 1.2; m < 2.1; m+= 0.1) {
        console.log( c * m);
    } 
}

//7//
{
    console.log("\nFor 7")
    let a = 2, b = 3, sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }   
    console.log( "sum = ",sum);
}
//8//
{
    console.log("\nFor 8")
    let a = 2, b = 3, c = 1;
    for (let i = a; i <= b; i++) {
        c *= i;
    }   
    console.log(c);
}

//9//
{
        console.log("\nFor 9")
        let a = 2, b = 3, result = 0;
        for (let i = a; i <= b; i++) {
            result += i*i;
        }   
        console.log("result = ", result); 
}

//10//
{
    console.log("\nFor 10")
    let n = 3, sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }   
    console.log("sum = ",sum); 
}

//11//
{
    console.log("\nFor 11")
    let a = 5, value, sum = 0;
    for (let i = 5; i <= 10; i++) {
        value = i * i;
        sum += value;
    } console.log(sum)
}

//12//
{
    console.log("\nFor 12")
    let n = 4, multiplication = 1;
    for (let i = 1.1; i < 1.1 + n / 10; i += 0.1) {
        multiplication *= i;
    }
    console.log("multiplication =", multiplication)
}

//13//
{
    console.log("\nFor 13")
    let n = 4, sum = 0, value = 1;
    for (let i = 1.1, j = 1; i < 1.1 + n / 10; i += 0.1, j++) {
        value = Math.pow(-1, j);
        sum += i * value;
    } console.log(sum);
}

//14//
{
    console.log("\nFor 14")
    let n = 6, value = 0;
    for (let i = 1; i <= 2 * n - 1; i += 2) {
        value += i;
    } console.log(value);
}

//15//
{
    console.log("\nFor 15")
    let a = 5, n = 3, value = 1;
    for (let i = 1; i <= n; i++) {
        value *= a;
    } console.log(value);
}

//16//
{
    console.log("\nFor 16")
    let a = 7, n = 4, values = 1;
    for (let i = 1; i <= n; i++) {
        values *= a;
        console.log(values);
    }
}

//17//
{
    console.log("\nFor 17")
    let a = 5, n = 4, value = 1, sum = 1;
    for (let i = 1; i <= n; i++) {
        value *= a;
        sum += value;
    } console.log("sum =", sum);
}

//18//
{
    console.log("\nFor 18")
    let a = 6, n = 3, value1, value2 = 1, sum = 1;
    for (let i = 1, j = 1; i <= n; i++, j++) {
        value1 = Math.pow(-1, j);
        value2 *= a;
        sum += value1 * value2;
    } console.log("sum =", sum)
}

//19//
{
    console.log("\nFor 19")
    let n = 5, niFaktoryal = 1;
    for (let i = 1; i <= n; i++) {
        niFaktoryal *= i;
    } console.log(niFaktoryal);
}

//20//
{
    console.log("\nFor 20")
    let n = 4, niFaktoryal = 1, sum = 0;
    for (let i = 1; i <= n; i++) {
        niFaktoryal *= i;
        sum += niFaktoryal;
    } console.log("sum =", sum);
}
