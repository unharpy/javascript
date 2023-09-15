/*
데이터 타입
 - 값의 종류를 의마하고, 기본 타입과 객체 타입으로 나뉜다.
 */

 /*
 기본타입
  - 값을 하나만 가지며 원시값이라고도 불린다.
  - number(숫자), string(문자열), boolean, null, undefined, symbol

 객체 타입
  - 기본 타입을 제외한 값은 모두 객체 타입이다.
  - 오브젝트(Object) 배열(Array) 함수(Function) 등 다양한 객체 존재

 typeof
  - 피연산자의 데이터 타입을 문자열로 반환한다 - 데이터 타입 확인용 키워드.
*/
console.log(typeof "123123");

/*
숫자
 - number 타입이라고 합니다.
 - 자바나 다른 언어는 정수, 데이터 크기에 따라 키워드가 다양하지만 
   자바스크립트는 그냥 숫자만 적으면된다.
   
 - 숫자 타입에서 특별한 값
  - Infinity - 양수를 0으로 나눈 경우
  - -Infinity - 음수를 0으로 나눈 경우
  - NaN : 문자열을 나눈경우
*/
let number1 = 1;
const number2 = 2;
console.log(number2);

let number3 = 1;
const number4 = "안녕" /0 ;
console.log(number4);

/*
문자열 
 - string 타입이라고 한다.
 - 문자열을 표현할 땐 작은따음표(''), 큰따음표(""), 백틱(``) 사용
 - 백틱(``) ES6버전에서 유입되었다.


 백틱
  - 여러줄 표현이 가능하다.
  - 탬플릿 문자열을 더 편리하게 사용이 가능하다.

탬플릿 문자열
  - 값과 문자열을 + 기호를 사용하여 연결한다.
  - 백틱을 사용하면 더 편리하게 연결이 가능하다.
*/

let nameA = '홍길동';
let nameB = "박길동";
let nameC = `유길동`;
console.log(typeof nameA);
console.log(typeof nameB);
console.log(typeof nameC);

// 백틱은 여려줄 표현이 가능
let temp1 = `안녕하세요
반갑습니다.
퇴근을 했는데
집이 아니에요`;
console.log(temp1);

//탬플릿 문자열
let nameD = "유중근";
let age = 88;
let city = "대전";
console.log("내 이름은"+ nameD + "입니다. 나이는" + age + "입니다");

//백틱 사용

console.log(`내 이름은 ${nameD} 입니다. 사는곳은 ${city} 나이는 ${age}입니다`);

/*
이스케이프 표현
 - 일반적인 문자 외에 특수 문자는 이스케이프 표현을 사용한다.
 - \n 줄바꿈
 - \\ 백스페이스
 - \"" 큰따음표
 - '' 작은따음표
 - \t 탭
*/
console.log("안녕하세요\n반갑습니다.");
console.log("안녕하세요\"반갑습니다.\"");
console.log("안녕하세요\t반갑습니다.");

/*
boolean(불린)
 - true 와 false 두가지 값만 가지는 논리형 데이터 타입이다.
*/
let isTrue = true;
let isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);


/*
심볼(symbol)
 - 유일한 값을 나타내기 위해 ES6버전에서 도입한 데이터 타입이다.
 - 고유한 식별자가 필요할 때 사용한다.
 */

 // symbol을 줌으로써 값은 같지만 고유한 식별자가 되었으므로 symbol값이 달라져 flase가 됨
let key1 = Symbol("abc");
let key2 = Symbol("abc");
console.log(key1 ==key2); // symbol값은 서로 다름.
console.log(key1.description); // symbol값 출력

let key3 = "abc";
let key4 = "abc";
console.log(key3 ==key4);

/*
null, undefined
 - 둘 다 값이 비어있는 상태이다.
 - null : 값이 없는 상태
 - undefined : 값을 할당하지 않은 상태
*/
let message1 = null;    // 값이 null인 빈 상태를 표현
let message2 = undefined;   // 값이 할당이 안된상태
console.log(message1);
console.log(message2);