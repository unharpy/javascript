/*
조건문
 - 조건에 따라 다른 문장을 실행하는 명령문
 - if, switch
*/

/*
if 문
 - if : 조건이 true인 경우 명령문을 실행합니다.
 - else : false일 경우 명령문을 실행합니다.0
 - else if : 다중조건을 의미하고, 여러개의 조건을 확일할 수 있다.
 */
let condition = false;
if(condition) {
    console.log("참 입니다");    
} else {
        console.log("거짓 입니다");
}

let number = 30;
if(number == 10) {
    console.log("첫 블록");
} else if(number==20) {
    console.log("두번째 블록");
} else if(number==30) {
    console.log("세번째 블록");
} else {
    console.log("네번째 블록");
}

// if문 연습
// 논리 연산자 사용
// let score = prompt("점수를 입력해 주세요");
// let isPass = score >= 60;
// if(isPass && score >= 90) {
//     console.log("A학점, 합격입니다.");
// } else if (isPass && score >= 80) {
//     console.log("B학점, 합격입니다")
// } else if (isPass && score >= 70) {
//     console.log("C학점, 합격입니다")
// } else if (isPass && score >= 60) {
//     console.log("D학점, 합격입니다")
// } else   {
//     console.log("F학점, 불합격입니다")
// }

// 다중 조건문
let passwordCheck = true;
let userRole = "admin";
let adminRole = "a"
if (passwordCheck) {
    if(userRole === "admin") {
        console.log("관리자로 로그인 합니다");
        if (adminRole === "a") {
            console.log("a 부서입니다")
        } else {
            console.log("다른 부서입니다.")
        }
    } else if (userRole === "user"){ 
        console.log("사용자로 로그인 합니다");
    } else {
        console.log("페이지 접근이 제한되었습니다")
    }
} else {
    console.log("비밀번호를 잘못 입력했거나 없는 아이디입니다.")
}

/*
switch문
 - switch문의 값이 case조건과 일치할 경우 해당 case절의 명령문 수행
 - case절의 명령문을 수행한 후 break를 만나면 switch문을 종료
 - 일치하는 case절이 없으면 default절의 명령문을 수행
 */

let subject = 'j쿼리'
switch(subject) {
    case 'javascript' :
        console.log('자바스크립트 수업입니다');
        break;
    case 'css' :
        console.log('css 수업입니다');
        break;
    case 'html' :
        console.log('html 수업입니다.')
        break;
    default :
    console.log('모든 case절과 일치하지 않음');    

}

// switch문 연습
let score = prompt("점수를 입력해주세요.");
let value = Math.floor(score /10);
switch(value){
    case 10:
    case 9:
        console.log('A 학점 입니다.');
        break
    case 8:
    case 7:
        console.log('B 학점 입니다');
        break
    case 6:
    case 5:
        console.log('C 학점 입니다');
        break
    default:
        console.log('F 학점입니다');
}
