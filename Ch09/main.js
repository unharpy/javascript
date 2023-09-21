/*
객체 (Object)
 - 연관된 데이터를 담는 그릇이다.
 - 객체의 내용물이 바뀌어도 본질은 같은 객체이다.
 - 객체는 키와 값으로 이루어져 있다.
 - 객체가 가지고 있는 값을 속성이라고 하며 함수인 경우는
   매서드라고 한다.
 - 속성(프롬퍼티)은 기본 타입이 될 수도 있고, 메서드를 가질 수 있고,
   배열, 객체를 프로퍼티로 가질 수 있다.  
 */
const obj = {
    // name이 키
    //'유중근이 값(value)' 
    name: '유중근',     //속성(프로퍼티)
    age: 28,
    hello: function () {     // 매서드
        console.log("hello");
    },
    hobby: ['운동', '게임', '독서'],
    score: {
        '수학': 100,
        '영어': 90
    },
    parent: parent,
};
var parent = {
    name: '홍길동'
};

/*
객체 생성
 - 리터럴 방식 : 중괄화{} 안에 key: value 형태를 쉼표로 구분하여 생성
 - 생성자 방식 : new 연산자와 Object 생성자를 사용하여 생성
*/
//리터럴 방식
const object1 = {}
object1.name = '유중근';
object1.age = 99;

//생성자 방식
const object2 = new Object();
object2.name = '유중근';
object2.age = 99;

/*
객체 프로퍼티 접근
 - 점 표기법, 괄호 표기법
 */
const person = {
    name: '홍길동',
    age: 99,
    hobby: ['운동', '게임', '독서'],
    hello: function () {
        // aotjem
        console.log("hello");
    },
    children: {
        name: "유중근",
    },
};
//점 표기법
person.name;
person.age;
person.hobby[1];
person.hello();
person.children.name;

console.log(person.children.name);

// 괄호 표기법
person['name'];
person['age'];
person['hobby'][1];
person['hello']();
person['children']['name'];
console.log(person["hobby"][1]);

/*
객체 프로퍼티 생성 및 제거
 */
// 생성
object1.name = '유중근';
object1.age = 99;

// 제거 (delate) 사용
delete object1.age;

/*
함수 파라미터 객체 전달하기
*/

function printPerson(name, age, hobby) {
    console.log
    ('이름' + name + '나이' + age + '취미:' + hobby);
}
printPerson('유중근', 100, "게임");

function printPerson2(objPerson) { console.log('이름' + objPerson.name + '나이' + objPerson.age + '취미:' + objPerson.hobby); }
const objPerson = { name: '유중근', age: 90, hobby: '운동' };
printPerson2(objPerson);

/*
구조 분해 할당
 - 배열이나 객체의 속성을 개별 변수에 담을 수 있게 하는 표현식이다.
*/
const temp = {
    name : 'yjg',
    age : 11,
    job : '개발자'
};

// const name = temp.name;
// const age = temp.age;
// const job = temp.job;

// 구조 분해 할당을 사용하여 개별 변수에 담을 때 
const {name, age, job } = temp;

// 구조 분해 할당을 사용하여 함수에서 객체 개별 속성을 받을 때 
function tempPerson ({name, age, job}){
    console.log('이름' + name + '나이' + age + '직업:' + job);
}
tempPerson(temp);

/*
팩토리 함수
 - 객체를 반환하는 함수이다.
 - 같은 유형의 객체를 여러번 생성해야 하는 경우에 사용한다.
 - 같은 유형의 객체를 여러번 생성하면 번거롭고 가독성이 떨어지는데 
   팩토리 함수를 사용하여 해결할 수 있다.
 */
// 같은 유형의 객체를 여러번 생성
const person1 = {
    name: '홍길동',
    age: 20,
    hobby : '운동'
};
const person2 = {
    name: '김길동',
    age: 20,
    hobby : '운동'
};

const person3 = {
    name: '구길동',
    age: 20,
    hobby : '운동'
};

const person4 = {
    name: '개길동',
    age: 20,
    hobby : '운동'
};

// 팩토리 함수 사용

function createPercon(name, age, hobby) {
    return {
        name : name,
        // age : age,       명칭이 똑같으면 하나만 써도된다.
        age,
        // hobby : hobby    명칭이 똑같으면 하나만 써도된다.
        hobby               // 단축 속성명은 esc에 추가됨
    };
};
const person5 = createPercon('dbwndrms' ,10,'운동');
const person6 = createPercon('dbwndrms1',20,'게임');
const person7 = createPercon('dbwndrms2',30,'독서');
const person8 = createPercon('dbwndrms3',40,'운동');
console.log(person4)

/*
참조 타입(객체 타입)
 */
// 기본타입(원시 타입, 프리미티브 타입) 복사
// 기본타입은 복사할 때 값 자체를 넘겨주기 때문에 값의 원형이 바뀌지 않는다.
let str1 = 'hello';
let str2 = str1;
str2 ='world';
console.log(str1);
console.log(str2);

// 참조 타조(객체 타입) 복사
// 객체를 다른 변수에 할당하면 참조값이 할당 되기 때문에 할당 받은 변수에서
// 속성을 변경하면 값의 원형이 변경된다.
let obj1 = { name: 'yjg', age: 20};
let obj2 = obj1;        // 객체2에 객체1을 할당해서 복사한겨
obj2.age = 30;
console.log(obj1);
console.log(obj2);

// Call by Value:  기본 타입(원시 타입, 프리미티브 타입) 호출
// 값 자체를 username에 할당하기 때문에 callName은 변경되지 않는다. 
function change(username) {
    username = 'dbwndrms';
}
let callName ='oplet';
change(callName);
console.log(callName);

// Call By Reference 참조 타입(객체 타입) 호출
// 값을 가르키는 참조값을 people에 할당 했기 때문에 people에 속성을
// 변경하면 callName에 속성 값도 함께 변경이 된다.
function change2(people) {
    people.name = 'dbwndrms';
}
let callName2 = {name:'oplet'};
change2(callName2);
console.log(callName2);

/*
전개 구문
 - 객체안의 프로퍼티를 펼치는 방식으로 할당할 수 있다.
 - ... 표기법으로 사용한다.
*/
const obj3 = {
    name : 'dbwndrms',
    age: 50,
};
const obj4 = {
    ...obj3,
    hobby: 'exercise',
}
console.log(obj4);

/*
객체 복사
 - 다른 참조값을 가지는 객체를 완전히 복사한다
 - 전개 구문을 이용하는 복사, Object.assign()를 사용하는 복사
 */
const obj5 = {
    name: '유중근'
};
const obj6 = {...obj5};
obj6.name = 'dbwndrms';
console.log(obj5);
console.log(obj6);

//Object.assign() 사용
const obj7 = {
    name: 'dbwndrms',
};
const obj8 = Object.assign({}, obj7);
obj8.name = 'unharpy';
console.log(obj7);
console.log(obj8);

/*
for ... in 
  - 객체의 항목들을 반복하여 반환한다.
 */
const obj9 = {
    name: 'dbwndrms',
    age: 35,
    job: '개발자'
};
for(let key in obj9){
    console.log(key + ': ' + obj9[key]);
    
} 

/*
키 존재 여부 확인
 - key in object, Object.hasOwn(), obj.hasOwnProperty(), if문 사용
*/
const obj10 = {
    name: "dbwndrms"
};

// key in object
console.log('name' in obj10); //true & flase

// Object.hasOwn()
console.log(Object.hasOwn(obj10, 'name'));    // (객체명을 적어야함 , )

// obj.hasOwnProperty()
console.log(obj10.hasOwnProperty('name'));

// if문 사용
if (obj10.name) {
    console.log("프로퍼티가 있습니다.");
} else {
    console.log("프로퍼티가 없습니다.");
}
