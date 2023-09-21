console.log(123)

//정적 개발 할때는 거의 99% for  문을 사용한다. 


for(let j=0; j < 7; j++){
    for(let i=0; i <= j; i++){
        document.write("*")
    }
    document.write("<br>")
}
document.write("---------------<br>")
for(let j=7; j > 0; j--){
    for(let i=1; i <= j; i++){
        document.write("*")
    }
    document.write("<br>")
}