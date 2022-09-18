// array 1 //
{
    function array(length) {
        let array = [];
        for (let i = 0; i < length; i++) {
            array[i] = 1 + i * 2;
        }
        return array;
    }
    console.log(array(5));
}
// array 2 //
{
    function array(length) {
        let array = [], k = 0;
        for (let i = 1; i <= length; i++) {
            array[k] = Math.pow(2, i);
            k++;
        }
        return array;
    }
    console.log(array(5));
}
// array 3 //
{
    function array(length, a, d) {
        let array = [];
        array[0] = a;
        for (let i = 1; i < length; i++) {
            array[i] = array[0] + array[i - 1] * d;
        }
        return array;
    }
    console.log(array(4, 1, 3));
}
// array 4 //
{
    function array(length, a, d) {
        let array = [];
        array[0] = a;
        for (let i = 1; i < length; i++) {
            array[i] = array[0] * Math.pow(d, i);
        }
        return array;
    }
    console.log(array(3, 1, 2));
}
// array 5 //
{
    function array(length) {
        let array = [];
        array[0] = 0;
        array[1] = 1;
        for (let i = 2; i < length; i++) {
            array[i] = array[i - 1] + array[i - 2];
        }
        return array;
    }
    console.log(array(6));
}
// array 6 //
{
    function array(length, a, b) {
        let array = [], sum = a + b;
        array[0] = a;
        array[1] = b;
        for (let i = 2; i < length; i++) {
            array[i] = sum;
            sum += array[i];
        }
        return array;
    }
    console.log(array(4, 1, 2));
}
// array 7 //
{
    function reverseArray(array) {
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
            let temp = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = temp;
        }
        return array;
    }
    console.log(reverseArray([11, 10, 9, 8, 7, 6]));
}
// array 8 //
{
    function arrayOfOdd(array) {
        let newArr = [], k = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 != 0) {
                newArr[k] = array[i];
                k++;
            }
        }
        console.log(newArr, ",count =", k);
    }
    arrayOfOdd([1, 0, 7, 6, 5, 11]);
}
// array  9 //
{
    function arrayOfEven(array) {
        let newArr = [], k = 0;
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] % 2 == 0) {
                newArr[k] = array[i];
                k++;
            }
        }
        console.log(newArr, ",count =", k);
    }
    arrayOfEven([1, 2, 5, 6, 4, 12]);
}
// array 10 //
{
    function evenAndOdd(array) {
        let even = [], odd = [], k = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                even[k] = array[i];
                k++;
            }
        } k = 0;
        for (let i = array.length - 1; i > 0; i--) {
            if (array[i] % 2 != 0) {
                odd[k] = array[i];
                k++;
            }
        }
        console.log(even, ",", odd);
    }
    evenAndOdd([12, 10, 11, 8, 7, 6]);
}
// array 11 //
{
    function array(array, k) {
        let newArr = [], j = 0;
        for (let i = k; i < array.length; i += k) {
            newArr[j] = array[i];
            j++;
        }
        return newArr;
    }
    console.log(array([12, 10, 4, 5, 6, 7, 8], 3));
}
// array 12 //
{
    function array(array) {
        let newArr = [], k = 0;
        for (let i = 2; i < array.length; i += 2) {
            newArr[k] = array[i];
            k++;
        }
        return newArr;
    }
    console.log(array([12, 10, 4, 5, 6, 7, 8]));
}
// array 13 //
{
    function array(array) {
        let newArr = [], k = 0;
        for (let i = array.length - 2; i > 0; i -= 2) {
            newArr[k] = array[i];
            k++;
        }
        return newArr;
    }
    console.log(array([12, 10, 4, 5, 6, 7, 8, 11]));
}
// array 14 //
{
        function array(array) {
            let newArr = [], newArr1 = [], j = 0;
            for (let i = array.length - 2; i > 0; i -= 2) {
                newArr[j] = array[i];
                j++;
            } j = 0;
            for (let i = 1; i < array.length; i += 2) {
                newArr1[j] = array[i];
                j++;
            }
            console.log(newArr, "\n", newArr1);
        }
        array([12, 10, 9, 4, 7, 0]);
}
// array 15 //
{
    function array(array) {
        let newArr = [], newArr1 = [], j = 0;
        for (let i = 1; i < array.length; i += 2) {
            newArr[j] = array[i];
            j++;
        } j = 0;
        for (let i = array.length - 2; i > 0; i -= 2) {
            newArr1[j] = array[i];
            j++;
        }
        console.log(newArr, "\n", newArr1);
    }
    array([12, 10, 9, 4, 7, 0]);
}
// array 16 //
{
    function array(array) {
        let newArr = [], k = 0;
        for (let i = 0, n = array.length - 1; i < array.length; i++, n--) {
            newArr[k] = array[i];
            k++;
            newArr[k] = array[n];
            k++;
        }
        return newArr;
    }
    console.log(array([12, 10, 9, 8, 7]));
}
// array 17 //
{
    function array(array) {
        let newArr = [], k = 0;
        for (let i = 0, m = array.length - 1; i < array.length && m > 0; i += 2, m -= 2) {
            newArr[k] = array[i];
            k++;
            newArr[k] = array[i + 1];
            k++;
            newArr[k] = array[m];
            k++;
            newArr[k] = array[m - 1];
            k++;
        }
        return newArr;
    }
    console.log(array([10, 11, 0, 2, 7, 9]));
}
// array 18 //
{
    function array(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 10) {
                return array[i];
            }
        }
        return 0;
    }
    console.log(array([1,8,1,3,4,5,6,10,80,7,15]));
}
// array 19 //
{
    function array(array) {
        let k = array.length - 1;
        while (((array[0] >= array[k]) || (array[k] >= array[array.length - 1])) && (k > 0)) {
            --k;
        } if (k == 0) {
            return 0;
        }
        return array[k];
    }
    console.log(array([1, 10, 80, 70, 90, 17, 15]));
}
// array 20 //
{
    function sumArr(array, k, l) {
        let sum = 0;
        for (let i = k; i <= l; i++) {
            sum += array[i];
        }
        return sum;
    }
    console.log(sumArr([1, 4, 5, 6, 7, 8], 2, 4));
}
// array 21 //
{
    function arithmSum(array, k, l) {
        let sum = 0, count = 0, arSum = 0;
        for (let i = k; i <= l; i++) {
            count++;
            sum += array[i];
            arSum = sum / count;
        }
        return arSum;
    }
    console.log(arithmSum([1, 4, 5, 6, 7, 8], 2, 4));
}
// array 24 //
{
    function sumArr(array, k, l) {
        let sum = 0;
        for (let i = k + 1; i < l; i++) {
            sum += array[i];
        }
        return sum;
    }
    console.log(sumArr([1, 4, 5, 6, 7, 8], 2, 4));
}
// array 23 //
{
    function arithmSum(array, k, l) {
        let sum = 0, count = 0, arSum = 0;
        for (let i = k + 1; i < l; i++) {
            count++;
            sum += array[i];
            arSum = sum / count;
        }
        return arSum;
    }
    console.log(arithmSum([1, 4, 5, 6, 8, 8], 2, 5));
}
// array 24 //
{
    function arithmProgr(array) {
        let d = array[1] - array[0];
        for (i = 1; i < array.length; i++) {
            if (d + array[i] == array[i + 1])
                return d;
        }
        return 0;
    }
    console.log(arithmProgr([1, 2, 3, 4]));
}
// array 25 //
{
    function geomProgr(array) {
        let q = array[1] / array[0];
        for (let i = 1; i < array.length; i++) {
            if (q * array[i] == array[i + 1])
                return q;
        }
        return 0;
    }
    console.log(geomProgr([1, 2, 2, 5, 8]));
}
// array 26 //
{
    function check(array) {
        for (let i = 0; i < array.length; i++) {
            if (((array[i] % 2 != 0) && (array[i + 1] % 2 != 0))
                || ((array[i] % 2 == 0) && (array[i + 1] % 2 == 0))) {
                return i + 1;
            }
        }
        return 0;
    }
    console.log(check([1, 2, 5, 8]));
}
// array 27 //
{
    function check(array) {
        for (let i = 0; i < array.length; i++) {
            if ((array[i] > 0 && array[i + 1] > 0)
                || (array[i] < 0 && array[i + 1] < 0)) {
                return i + 1;
            }
        }
        return 0;
    }
    console.log(check([-1, 2, -2, 4]));
}
// array 28 //
{
    function minArr(array) {
        let min = array[2];
        for (let i = 2; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    }
    console.log(minArr([1, 2, 3, 4, -57, 6, -7]));
}
// array 29 //
{
    function maxArr(array) {
        let max = array[1];
        for (let i = 1; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        return max;
    }
    console.log(maxArr([1, 2, 3, 4, -5, 6]));
}
// array 30 //
{
    let count = 0;
    function array(array) {
        let newArr = [], k = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                newArr[k] = i;
                k++;
                count++;
            }
        }
        return newArr;
    }
    console.log(array([1, 2, 1, 4, 2, 6, 4]), ", count = " + count);//1, 3, 5
}
// array 31 //
{
    let count = 0;
    function array(array) {
        let newArr = [], k = 0;
        for (let i = array.length - 1; i > 0; i--) {
            if (array[i + 1] < array[i]) {
                newArr[k] = i;
                k++;
                count++;
            }
        }
        return newArr;
    }
    console.log(array([1, 2, 1, 4, 2, 6, 4]), ", count = " + count);//5, 3, 1
}
// array 32 //
{
    function localMin(array) {
        let locMin;
        for (let i = 0; i < array.length; i++) {
            if (array[i + 1] < array[i] && array[i + 1] < array[i + 2]) {
                locMin = i + 1;
                return locMin;
            }
        }
    }
    console.log(localMin([1, 2, 3, 4, 5, 4, 6, 5, 6]));//4 , nomer - 5
}
// array 33 //
{
    function localMax(array) {
        let locMax;
        for (let i = 0; i < array.length; i++) {
            if (array[i + 1] > array[i] && array[i + 1] > array[i + 2]) {
                locMax = i + 1;
                return locMax;
            }
        }
    }
    console.log(localMax([1, 2, 3, 4, 5, 4, 6, 5, 6]));
}
// array 34 //
{
    function localMin(array) {
        let newArr = [], k = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i + 1] < array[i] && array[i + 1] < array[i + 2]) {
                newArr[k] = array[i + 1];
                k++;
            }
        } let maxOfMin = newArr[0];
        for (let i = 0; i < newArr.length; i++) {
            if (maxOfMin < newArr[i]) {
                maxOfMin = newArr[i];
            }
        }
        return maxOfMin;
    }
    console.log(localMin([1, 2, 3, 4, 5, 4, 6, 5, 6, -1, 4, 8, 7, 8]));//7
}
// array 35 //
{
    function localMax(array) {
        let newArr = [], k = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i + 1] > array[i] && array[i + 1] > array[i + 2]) {
                newArr[k] = array[i + 1];
                k++;
            }
        }
        let minOfMax = newArr[0];
        for (let i = 0; i < newArr.length; i++) {
            if (minOfMax > newArr[i]) {
                minOfMax = newArr[i];
            }
        }
        return minOfMax;
    }
    console.log(localMax([1, 2, 3, 4, 5, 4, 6, 5, 6]));
}
// array 36 //
{
    function check(array) {
        let newArr = [], k = 0;
        for (let i = 0; i < array.length; i++) {
            if ((array[i + 1] < array[i] && array[i + 1] < array[i + 2]) ||
                (array[i + 1] > array[i] && array[i + 1] > array[i + 2])) {
                continue;
            }
            newArr[k] = array[i + 1];
            k++;
        }
        let max = newArr[0];
        for (let i = 0; i < newArr.length; i++) {
            if (max < newArr[i]) {
                max = newArr[i];
            }
        }
        return max;
    }
    console.log(check([1, 2, 8, 8, 4, 5, 4, 6, 5, 6, 7]));
}
// array 37 //
{
    function length(array) {
        let number = 0;
        for (let i = 3; i < array.length; i++) {
            if ((array[i - 2] < array[i - 1]) && (!(array[i - 1] < array[i]))) {
                number++;
            }
        } if (array[array.length - 2] < array[array.length - 1]) {
            number++;
        }
        return number;
    }
    console.log(length([1, 2, 3, 1, 4, 1, 3, 2, 0, 5, 6]));
}
// array 38 //
{
    function length(array) {
        let number = 0;
        for (let i = 3; i < array.length; i++) {
            if ((array[i - 2] > array[i - 1]) && (!(array[i - 1] > array[i]))) {
                number++;
            }
        } if (array[array.length - 2] > array[array.length - 1]) {
            number++;
        }
        return number;
    }
    console.log(length([1, 2, 3, 1, 4, 1, 3, 2, 0, 5, 6]));
}
// array 39 //
{
    function length(array) {
        let number = 0;
        for (let i = 2; i < array.length; i++) {
            if (((array[i - 2] > array[i - 1]) && (!(array[i - 1] > array[i])))
                || ((array[i - 2] < array[i - 1]) && (!(array[i - 1] < array[i])))) {
                number++;
            }
        }
        if (array[array.length - 2] != array[array.length - 1])
            number++;
        return number;
    }
    console.log(length([1, 2, 3, 1, 4, 1, 3, 2, 0, 5, 6]));
}
// array 40 // 
{
    function minDist(array, r) {
        let min = Math.abs(array[0] - r), num;
        for (let i = 1; i < array.length; i++) {
            if ((Math.abs(array[i] - r)) < min) {
                min = Math.abs(array[i] - r);
                num = array[i];
            }
        }
        return num;
    }
    console.log(minDist([12, 10, 4, 5, -6, 2], 6));
}