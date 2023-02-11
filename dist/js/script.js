
// 1

let numberOne = Number(prompt("Введіть початок діапазону",));
let numberTwo = Number(prompt("Введіть кінець діапазону",));
let sum = 0;
while(numberOne <= numberTwo) {
      sum = sum + numberOne;
     numberOne++;
}
alert(sum);

// 2

// let x = prompt("Введіть перше число",);
// let y = prompt("Введіть друге число",);

// function chusla (x, y) {
// 	if (y > x) return chusla(y, x);
// 	if (!y) return x;
// 	return chusla(y, x % y);
// }
// console.log(chusla(x,y));



// 3

// let number = Number(prompt("Введіть число",))

// for(let i = 0; i < number+1;i++){
//     if(number % i == 0){
//        console.log(i)
//     }
// }


// 4
// let number = prompt("Введіть число",);

// console.log(`${number.length} цифр у числі`);

// 5

//  let i = 0;
//  let a = 0;
//  let b = 0;
//  let c = 0;
//  let d = 0;
//  let e = 0;

//  while(i < 10){
//    let numbers = prompt('Введіть число');
//    console.log(numbers);
//    i++;
//    if(numbers < 0){
//     a++
//    }
//    if(numbers > 0){
//       b++
//      }
//      if(numbers == 0){
//       c++
//      }
//      if(numbers % 2 == 0){
//       d++
//      }
//      if(numbers % 2 == 1){
//       e++
//            }
//  }
// alert(`Відємних чисел ${a}, додатніх чисел ${b}, нулів ${c}, парних ${d}, непарних ${e}`)




// 6

// while(true){
//     let number = Number(prompt("Введіть число",));
// let num = prompt("Введіть знак",);
// let numberTwo = Number(prompt("Введіть число",)) ;
// if(num == "+"){
//     let suma = number + numberTwo;
//     alert(suma)
// }else if(num == "-"){
//     let suma = number - numberTwo;
//     alert(suma)
// }
// else if(num == "*"){
//     let suma = number * numberTwo;
//     alert(suma)
// }else if(num == "/"){
//     let suma = number / numberTwo;
//     alert(suma)
// }
// if (confirm('Ще приклади?')){
//   break;
// } 
// }

// 7

// let number =  prompt("Введіть число");
// let numberr = prompt("Введіть число зміщення");
//    let re = number.split('',) 
//    let removed = re.splice(0, numberr);
//    let rer = re.push(removed)
//       alert(re);


// 8


// const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
// let day = 0;

// while (confirm(`${days[day]}. Бажаєте побачити назву наступного дня тижня?`)) {
//   day = (day + 1) % days.length;
// }


 // 9

//  while(true){
//  let numberOne = prompt("Введіть число (1-9) на яке потрібна таблиця множення",);
//  if(numberOne >= 1 && numberOne <= 9){
//         for(let i = 1; i <= 10; i++){
//             let sum = `${i} * ${numberOne} = ${i * numberOne} `
//               console.log(sum);
//            }
//            break;
          
//     }else{
//     alert("Невірно вказане число");
//  }
//  }

// 10

// let a = 0;
// let b = 100;
// let number = prompt("Введіть число");
// let re;
// while(re = prompt(`Ваше число більше чи менше ${Math.round(((a+b)/2))} (1-Менше, 2-Більше)`)){ 
//    function chusla(){
//       if(re == '1'){
//       b = Math.round(((a+b)/2));
//       re = Math.round(((a+b)/2))
//    }if(re == '2'){
//       a =  Math.round(((a+b)/2));
//       re = Math.round(((a+b)/2))
//    }
//    if(re == number){
//       alert(`Ваше число ${Math.round(((a+b)/2))}`)
//    }
// }
//    chusla()
// }

