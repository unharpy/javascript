console.log(1234);

alert("error")
// 변수
let name ="yjg";

console.log(name);
// 함수
function hello() {
    let name ="yjg";

    console.log(name);
}
hello();
// 객체
let obj = {
    age:99,                 //객체안에 쓰이는 변수를 속성이나 프로퍼티라 불린다.
    name :"yjg",        
    hello: function(){      // 객체안에 쓰이는 함수를 메서드라 한다.
        console.log('안녕하세요');
    }
};

obj.hello();
console.log(obj.name);
// 이벤트
function hello() {
    console.log('안녕');
}
/* 
    자바스크립트는 웹페이지의 동적인 기능을 구현하기 위해 만들어진 언어입니다.
    
    console.log(1234) -콘솔화면에 메시지 출력
    
    alert 브라우저 경고창 띄우기
    
    숫자표현은 숫자만 - 123456
    문자표현은 '안녕하세요'
    명령문의 끝은 - 세미클론을 붙여라(;)

    변수
    - 다양한 값을 저장한다
    변수예시)
    - let은 예약어(키워드)라고 불리며 문법적인 용도로 사용되고 있기 때문에 식별자로 사용할 수 없다.
      let, const funtion 등 많은 예약어가 있다.
    - name은 식별자로 불리며 이름을 붙일때 사용한다.

    함수
    - 코드를 편하게 사용하기 위해 그룹화한 것을 말한다.

    객체
    - 변수와 함수를 가진다.

    이벤트
    - HTML 요소에서 발생한 사건
      
*/