/*
DOM(document object model) 
 - 웹 문서를 객체화 함으로써 제어할 수 있다.
*/

/*
HTML 요소 선택하기
 get 메서드, query 메서드

 get 메서드
  - doucment.getElementById 
    : HTML에서 고유한 ID를 이용하여 요소를 찾는다.
  - document.getElementsByClassName 
    : HTML에서 클래스 명으로 요소를 찾는다. 
  - document.getElemnetByTagName
    :HTML에서 태그명으로 요소를 찾는다.
*/
// get 메서드
// document.getElementById('title');
// document.getElementsByClassName('item');
// document.getElemnetByTagName('li');
// // console.log(document.getElementById("title"));
// // console.log(document.getElementsByClassName("item"));
// console.log(document.getElemnetByTagName("li"));

/* 쿼리 메서드
 - document.querySelector
   : CSS 선택자를 사용하여 HTML 내 첫 번째 요솔르 찾는다.
 - document.querySelectorAll
   : CSS 선택자를 사용하여 HTML 내 일치하는 모든 요소를 찾는다.
*/

// get 메서드
document.querySelector('#title');
document.querySelectorAll('.item');
console.log(document.querySelector('#item'));

/*
HTML 요소 조작하기
 - 콘텐츠 수정
 - 속성 제어하기
*/

/*
컨텐츠 수정
 - textContent : 텍스트 데이터만 제공한다.
 - innerHTML : HTML 태그를 그대로 제공한다.
*/
// document.getElementById("title").textContent = "<h1>프론트엔드!!!!</h1>";
document.getElementById("title").innerHTML = "<h1>프론트엔드@@@@@</h1>"

let title = document.getElementById("title");
title.textContent = "프론트엔드!!!!";

// 기존의 요소가 지워지고 수정되므로 유의하자!
// document.querySelector("body").innerHTML = "!!!";

/*
속성 제어하기
 - setAttribute : 요소에서 주어진 이름의 속성값을 입력한다.
 - getAttribute : 요소에서 주어진 속성의 값을 가져온다.
 - removeAtrribute : 요소에서 주어진 이름의 속성을 제거한다.  - 속성 (id class name value 등등)
*/

let input = document.querySelector("input");

input.setAttribute('placeholder','입력해주세요.');
input.setAttribute('required', "");

console.log(input.getAttribute("placeholder"));

input.removeAttribute("required");

/*
HTML 요소 스타일링
 - 요소 프로퍼티 직접 수정
 - css 이용
*/

let hello1 = document.querySelector('.hello1');
hello1.style.color = "#12c46b";
hello1.style.background = "#777777";

// CSS 이용
let hello2 = document.querySelector("#hello2");
hello2.classList.add("hello2");     // add - 추가
hello2.classList.remove("hello2");  // remove - 제외

/*
새로운 요소 만들기
 - createElement : 지정한 태그로 HTML 요소를 생성한다.
 - appendChild : 삽입할 요소를 부모 요소의 마지막 자식 요소로 추가한다.
 - insertBefore : 첫 번째는 삽입할 요소이고, 두 번째는 삽입할 위치를 정하는 요소이다.
 - remove : 해당 요소를 제거한다.
 - parentNode : 지정된 노드의 부모를 반환한다.
 - children : 지정된 노드의 모든 자식을 반환한다.
 */

// createElement
// appendChild
let hello3 = document.createElement("p");
hello3.textContent = "hello bro"; 
document.querySelector("body").appendChild(hello3);

//insertBefore
let hello4 = document.createElement("p");
hello4.textContent = "World"; 
// 두번째 요소의 앞에 추가된다.
document.querySelector("body").insertBefore(hello4, hello3);

//remove
hello1.remove();

// parentNode
let li = document.querySelector(".item");
console.log(li.parentNode);

let ul = document.querySelector(".nope");
console.log(ul.children);

/*
데이터 속성
 - data-값 속성을 사용해서 HTML 요소에 임의의 데이터를 추가할 수 있다.
 - 브라우저에서 데이터 속성을 무시하므로 값으로 활용하기 좋다.
*/
let btn = document.querySelector("button");

console.log(btn.dataset.temp);

btn.dataset.temp = "버튼이 아닙니다.";
console.log(btn.dataset.temp);
