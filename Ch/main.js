/*
연산자
 - 어떠한 연산을 기호를 사용하여 수행한다.
*/

/*
문자열 병합
 - 문자열은 + 연산자를 사용하여 병합할 수 있다.
 */
console.log("안녕"+"하세용"+"내일만 지나면"+"주말이에용");
console.log(typeof ("1"+2)); // 문자열과 병합시 number도 string이 된다.
console.log("1"+2+3);
console.log(1+2+"3"); 

/*
산술 연산자 
  x + y : 덧셈
  x - y : 뺄셈
  x * y : 곱셈 
  x / y : 나눗셈
  x % y : 나머지   
*/
let x=10;
let y=2;
console.log(x*y);
console.log(x%y);
console.log(x+y);

/*
증강 연산자
 ++x : 전위 증가 (x에 1을 증가시킨 후에 명령문 수행)
 x++ : 후위 증가 (현재 명령문을 수행 후 x에 1을 증가)
 --x : 전위 감소 (x에 1을 감소시킨 후에 명령문 수행)
 x-- : 후위감소 (현재 명령문을 수행 후에 x에 1을 감소)
*/

// let result = ++x +y; 전위 증가
// let result = x++ +y; 후위 증가
// let result = --x +y; 전위 감소
// let result = x-- +y; 후위 감소
// console.log(result);

// let result1 = x-- *y;
// console.log(result1);
let result = x++ +y;

console.log(result);
console.log(x);
console.log(y);

/*
비교 연산자
 a > b   : a가 b보다 크다.
 a < b   : a가 b보다 작다.
 a >= b  : a가 b보다 크거나 같다
 a =< b  : a가 b보다 작거나 같다
 a == b  : a와 b는 같다
 a === b : a와 b는 같다(데이터 타입 까지 같다)
 a != b  : a와 b는 같지 않다.
 a !== b : a와 b는 같이 않다.(데이터 타입 까지)
*/
let a = 2;
let b = 2;
console.log(a>b);
console.log(a >= b);
console.log(a==b);
console.log(a!=b);
console.log(a!==b);
console.log(a===b);

/*
할당 연산자
 x += y : x는 x + y와 같다
 x -= y : x는 x - y와 같다
 x *= y : x는 x * y와 같다
 x /= y : x는 x / y와 같다
*/

let i = 10;
let j = 20;
i += j;
console.log(i) 
// i += j;
// console.log(i)       x는 x + y와 같다  
// i -= j;
// console.log(i)       x는 x - y와 같다
// i *= j;
// console.log(i)       x는 x * y와 같다
// i /= j;
// console.log(i)       x는 x / y와 같다

/*
논리 연산자 
 - 논리 연산자는 boolean값만 다룰 수 있지만 자바스크립트에서만 
   모든 타입 값을 받을 수 있고 결과 역시 모든 타입이 될 수 있다.
 - null, 0 , NaN, 빈 문자열(""), undefined는 false로 간주한다.
AND 연산자 (&&)
 - 피연산자가 모두 true일 경우에 true를 반환하고 나머지는 false로 반환

OR 연산자 (||) 
 - 피 연산자가 하나라도 true면 true를 반환하고 나머지는 false를 반환

NOT 연산자 (!)
 - true면 false를 반환하고 false면 true를 반환한다.

 단축평가
  - AND 연산자에서 앞쪽 피연산자가 false일 때,
    OR 연산에서 앞쪽 피연산자가 true일때 나머지 피연산자의 평가를 생략하고 그대로 반환.
 */

let a1 = true && true;
let a2 = true && false && true;
let a3 = true && (3 == 5);
let a4 = 111 && 222;        // 문자나 string이 나오면 기본적으로는 true and 연산자는 둘다 트루가 되어야만 되므로 둘다 확인해서 후에 나오는값이 출력이됨 
let a5 = 111 && false;
let a6 = null && undefined;
console.log(a6);

let o1 = true || true;
let o2 = true || false;
let o3 = false || false;
let o4 = false || true;
let o5 = 111 || 222;
let o6 = false || 222;
let o7 = null || undefined;
console.log(o6);

let n1 = !true;
let n2 = !false;
let n3 = !1111;
console.log(n2);

/*
삼항 연산자
 - 조건식 ? 값1: 값2
 - 조건식이 true이면 값1을 반환하고, false이면 값2를 반환한다.
*/
let number = 11;
let result2 = number % 2 == 1 ? "홀수입니다." : "짝수입니다.";
console.log(result2);