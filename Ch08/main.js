function average(arr){
    let sum = 0;
    for(let p = 0; p < arr.length; p++){
        sum += arr[p];
    }
    return sum/arr.length;
}+

let mix = [ 1,2,3,4,5];
console.log(average(mix))



// 계산기 함수

function cal(num1, num2, operator){
    switch (operator){
        case "+":
            return num1 + num2;
        case "-" :
            return num1 - num2;
        case "*" :
            return num1 * num2;
        case "/" :
            return num1 / num2;
        default :
            return "잘못된 연산자입니다.";
    }
}

 let result = cal(10, 5, "+");
 console.log(result)

 /// return 있어서
 //  break  없어도 괜춘




 function biggest(arr){
    let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if (arr[i]>max){
            max = arr[i];
        }
    }
    return max;
 }

 let some = [5,7,43,2,4,6]
 console.log(biggest(some))
