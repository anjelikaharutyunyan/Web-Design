//1//
{
    console.log("\nWhile 1");
    let a = 9, b = 3;
    while ( a > b){
        a = a - b;
    }
    console.log(a);
}

//2//
{
    console.log("\nWhile 2");
    let a = 9, b = 3, n = 0;
    while ( a > b){
        a = a - b;
        n++;
    }
    console.log(n);
}

//3//
{
    console.log("\nWhile 3");
    let a = 9, b = 3, n = 0;
    while ( a > b){
        a = a - b;
        n++;
    }
    console.log("Coefficient =", n, "residual =",a);
}

//4//
{
    console.log("\nWhile 4");
    let n = 8;
    while ( n % 3 == 0){
        n = n / 3;
    }
   console.log ( (n == 1) ? true : false );
}

//5//
{
    console.log("\nWhile 5");
    let N = 8, k = 0;
    while ( N % 2 == 0){
        k++;
        N = N / 2;
    }
    if (N == 1) console.log("k =",k);
}

//6//
{
    console.log("\nWhile 6");
    let N = 5, factorial = 1;
    while ( N > 0){
        factorial *= N;
        N -= 2;
    }
    console.log("Factorial =",factorial);
}

//7//
{
    console.log("\nWhile 7");
    let n = 5, k = 1;
    while ( k*k <= n){
        k++;
    }
    console.log(k);
}

//8//
{
    console.log("\nWhile 8");
    let n = 35, k = 1;
    while ( k*k <= n){
        k++;
    }
    k--;
    console.log(k);
}

//9//
{
    console.log("\nWhile 9");
    let n = 15, k = 1, temp = 3;
    while (temp <= n){
        temp *= 3;
        k++;
    }
    console.log(k);
}

//10//
{
    console.log("\nWhile 10");
    let n = 15, k = 0, temp = 3;
    while (temp < n){
        temp *= 3;
        k++;
    }
    console.log(k);   
}

//11//
{
    console.log("\nWhile 11");
    let n = 15, k = 0, sum = 0; ;
    while (sum <= n){
        k++;
        sum += k;
    }
    console.log("k =",k, "sum=",sum);
}

//12//
{
    console.log("\nWhile 12");
    let n = 15, k = 0, sum = 0;
    while (!(sum + k + 1 > n)){
        k++;
        sum += k;
    }
    console.log("k =",k, "sum =",sum);
}

//13//
{
    console.log("\nWhile 13");
    let a = 3, k = 0, temp = 0;
    while (temp <= a){
        k++;
        temp += 1 / k;
    }
    console.log("k =",k);
}

//14//
{
    console.log("\nWhile 14");
    let a = 3, k = 0, temp = 0;
    while (temp <= a){
        k++;
        temp += 1 / k;
    }
    console.log("k =",k - 1, "sum =", temp);
}

//15//
{
    console.log("\nWhile 15");
    let p = 6, k = 1, s = 1000;
    while (s <= 1100){
        k++;
        s += s * p / 100
    }
    console.log("k =",k, "s =", s);
}

//16//
{
    console.log("\nWhile 16");
    let p = 3, k = 1, d = 10, s = 10;
    while (s <= 200){
        k++;
        d += d * p / 100;
        s += d;
    }
    console.log("k =",k, "s =",s);
}

//17//
{
    console.log("\nWhile 17");
    let n = 127;
    while (n > 0){
        console.log(n%10);
        n /= 10;
    }
}

//18//
{
    console.log("\nWhile 18");
    let n = 245, sum = 0, num = 0;
    while (n >0){
        num++;
        sum += n % 10;
        n /= 10;
    }
    console.log("sum =",sum, "num =", num);
}

//18//
{
    console.log("\nWhile 18");
    let n = 245, sum = 0, num = 0;
    while (n >0){
        num++;
        sum += n % 10;
        n /= 10;
    }
    console.log("sum =",sum, "num =", num);
}

//19//
{
    console.log("\nWhile 19");
    let n = 245, s = 0;
    while (n > 0){
      s = s * 10 + n % 10;
      n /= 10;
    }
    console.log("The number obtained by reading the number N from right to left:",s);
}

//20//
{
    console.log("\nWhile 20");
    let n = 25;
    while((n>0)&((n%10)!=2)) {
        n /=10;
    }
    if ((n > 0) && (n % 10) == 2)
    console.log("True");
    else
    console.log("False");
}