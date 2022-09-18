//1//
{
console.log("Case 1");
let day = 3;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday");
}
}
//2//
{
console.log("\nCase 2");
let grade = 4;
    switch(grade){
        case 1: console.log("bad");break;
        case 2: console.log("unsatisfactory");break;
        case 3: console.log("satistaftory");break;
        case 4: console.log("good");break;
        case 5: console.log("excellent");
    }
}

//3//
{
console.log("\nCase 3");
let month = 11;
    switch(month){
        case 12: case 1: case 2: console.log("Winter");break;
        case 3: case 4: case 5: console.log("Spring");break;
        case 6: case 7: case 8: console.log("Summer");break;
        case 9: case 10: case 11: console.log("Autumn");break;
    }
}

//4//
{
console.log("\nCase 4");
let month = 3;
    switch(month){
        case 1:  case 3: case 5: case 7: case 8: case 10: console.log("31 days");break;
        case 4: case 6: case 11: case 9: case 12: console.log("30 days");break;
        case 2: console.log("28 days");
    }
}

//5//
{
console.log("\nCase 5");
let a = 15, b = 3;
let N = 3;
    switch(N){
        case 1: console.log(a + b);break;
        case 2: console.log(a - b);break;
        case 3: console.log(a * b);break;
        case 4: console.log(a / b);break;
    }
}

//6//
{
console.log("\nCase 6");
let a = 15, b = 3;
let N = 3;
    switch(N){
        case 1: console.log(a + b);break;
        case 2: console.log(a - b);break;
        case 3: console.log(a * b);break;
        case 4: console.log(a / b);break;
    }
}

//7//
{
console.log("\nCase 7"); 
let mass = 350;
let number = 3;
    switch(number){
        case 1: console.log( mass , "=" , mass, "kg" ); break;
        case 2: console.log(mass , "=" , mass/1000000, "kg"); break;
        case 3: console.log(mass , "=" , mass / 1000, "kg"); break;
        case 4: console.log(mass  , "=" , mass * 1000, "kg"); break;
        case 5: console.log(mass , "=" , mass * 100, "kg");
    }
}

//8//
{
console.log("\n Case 8");
let day = 9, month = 11;
day = day - 1;
    if( day == 0){
        month = month - 1;
       
    switch(month){
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:  day = 31; break;
        case 4: case 6: case 9: case 11: day = 30; break;
        case 2: day = 28; break;
    }
}
    console.log("The previous data: " + day + "."  + month);
}

//9//
{
    console.log("\n Case 9");
    let day = 31; month = 11;
    day++;
    if (month == 12) month = 1; else month++;
        switch(month){
            case 1: case 3: case 5: case 7: case 8: case 10: case 12: 
                if ( day > 31)  day = 1;  break;
            case 4: case 6: case 9: case 11:
                if ( day > 30) day = 1;  break;
            case 2: 
                if ( day > 28 ) day = 1;  break;
        }
        console.log("The next data: " + day + "."  + month);
}

//10//
{
    console.log("\n Case 10");
    let command = 1, direction = 'N';
    switch (direction) {
        case 'N':
            switch (command){
                case 1: direction = 'West'; break;
                case 0: direction = 'North'; break;
                case -1: direction = 'East'; break;
            }
            break;
        case 'E':
            switch (command){
                case 1: direction = 'North'; break;
                case 0: direction = 'East'; break;
                case -1: direction = 'South'; break;
            }
        case 'S':
            switch (command){
                case 1: direction = 'East'; break;
                case 0: direction = 'South'; break;
                case -1: direction = 'West'; break;
            }  
        case 'W':
            switch (command){
                case 1: direction = 'South'; break;
                case 0: direction = 'West'; break;
                case -1: direction = 'North'; break;
            }  
    }
    console.log (direction);

}