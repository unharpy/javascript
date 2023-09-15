/*변수 
- 값을 담는 그릇 변수에 담긴 값은 언제든 바뀔수 있다. 
  변수를 선언할때는 let 이라는 키워드와 식별자와 값으로 나뉜다. 
  같은 영역 안에 같은 식별자를 가진 변수는 추가 생성이 불가능하다.
   */

let name = '홍길동'; // 홍길동이라는 값을 가지는 name 변수를 선언 
console.log(name);

name = '유중근';     // name 변수의 값을 홍길동으로 변경


console.log(name);
name = '유중근';     // 같은 영역안에 추가 생성 불가


/*
상수
- 변수와 마친가지로 값을 담지만 할당된 값을 바꿀 수 없다.
- 상수를 선언할 때는 const라는 키워드를 사용한다.
*/
const today = "화요일";
console.log(today);

// today ="목요일";   // 상수는 값을 변경할 우 없다.

/*
스코프

- 프로그래밍에서 영역을 의미한다.
- 전역 스코프와 블록 스코프로 나뉜다.

전역 스코프
  - 자바스크립트의 최상단 영역이다
  - 전역 스코프에 선언된 변수를 전역 변수라 함.
*/
/*
블록스코프

  -{} 블록으로 묶인 영역이 블록스코프이다.
  - 블록안에 선언된 변수는 블록안에서만 접근이 가능하다.
  - 블록이 달라지면 변수를 다시 선언 할 수 잇다.
    부모 변수는 자식 영역에서 사용이 가능하다*/
let nameA = "유중근";  //전역 변수
if(true){
  let nameB ="유중근"
  let age = 99;
  console.log(nameB);

  if(true){
  let nameB ="박중근"

  console.log(nameB);
  console.log(age);
}
}
/*
식별자 규치
- 글자, $(달러), _(밑줄)로 시작할 수 있고 숫자로 시작할 수 없다.
- 글자, $(달러), _(밑줄), 숫자만 사용할 수 있다.
- 예약어(키워드)는 사용할 수 없다.*/

let number = 1;
let $number = 1;
let _number = 1;

// let 1number = 1; 숫자는 사용할 수 없다.
// let function ='abc'; 예약어는 사용할 수 없다.

/*
네이밍 규칙 
- 카멜 케이스
  중간 단어의 첫 글자가 대문자이며 낙타의 혹처럼 보인다고 해서
  카멜 케이스라고 불린다. ex)camelCaseNum

- 스네이크 케이스
 - 언더바가 들어있는 표현 방식이 뱀처럼 생겼다고해서 스네이크 케이스라고 불린다.
   ex) snake_case_sub

- 케밥 케이스
 - 케밥이 꼬챙이에 꽂힌 모습처럼 보인다고 해서 케밥 케이스라고 한다.
    ex) kebab-case

- 파스칼 케이스
 - 카멜 케이스와 유사하지만 단어의 시작이 모두 대문자이다.
    ex) PascalCase   
*/


/*
var 키워드
 - ES6버전 이전에 변수를 선언할 때 사용했다.
 - let이랑 다른점
  - 출력을 변수 선언 전에 사용할 수 있다.
  - 변수 선언을 여러번 할 수 있다.
  - 스코프의 영향을 받지 않는다.
*/
console.log(temp); // 변수 선언 전에 사용
var temp = 1;
var temp = 2;     // 변수 선언을 여러번 함

if(true){
  var temp2= 3;
}
console.log(temp2);   // 스코프에 영향을 받지 않음


/*
호이스팅
 - 코드가 실행될 때 변수나 함수가 최상단에 있는 것으로 간주한다.
*/
hello();
function hello() {
  console.log("hello");
}