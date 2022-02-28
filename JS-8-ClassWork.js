// //    Взяти файл template_2.html та працювати в ньому
// //    1) Напишіть код, який :
// //    a) додає клас з назвою групи, елементу з ід main_header
//     let mainHeaderStyle = document.getElementById('main_header');
//     mainHeaderStyle.classList.add('december-2021');

// //    b) робить шириниу елементу ul 400px
// //
// let ulWidth = document.getElementsByTagName('ul');
// ulWidth[0].style.width='400px'
// ulWidth[0].style.border = '1px dashed red';
//
// //    c) робить шириниу всіх елементів з класом linkList шириною 50%
//   let linkListClassWidth = document.getElementsByClassName('linkList');
//   console.log(linkListClassWidth);
//   for (const li of linkListClassWidth) {
//   li.style.width='50%';
//   li.style.border = '1px solid red';
//   }

//    d) отримує текст який зберігається в елементі з класом listElement2

// let li2Text = document.getElementsByClassName('listElement2');
// console.log(li2Text);


//    e) отримує всі елементи li та змінює ім колір фону на сірий
// let liElements = document.getElementsByTagName('li');
// console.log(liElements);
// for (const element of liElements) {
// element.style.backgroundColor = 'grey';
// }
//
//    f) отримує всі елементи 'a' та додає їм клас anchor
// let aElement = document.getElementsByTagName('a');
// for (const element of aElement){
//     element.classList.add('anchor');
// }
//
//    g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює
//    link3, змінює йому розмір тексту на 40 пікселів
// let aElement = document.getElementsByTagName('a');
// for (const element of aElement){
//      if (element.innerText==='link3') {
//          element.style.fontSize='40px';
//      }
// }


//    h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let aElement = document.getElementsByTagName('a');
// for (let element of aElement) {
//     let newClass = aElement.innerText
//     aElement.classList.add(`element_${newClass}`)
// }
//
//    i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let elementSubHeader = document.getElementsByClassName('sub-header');
//
// for (const item of elementSubHeader) {
//     item.style.color = prompt('enter color');
// }

//    j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
//    Колір отримати з prompt()

// let allSubHeader = document.getElementsByClassName('sub-header');
// for (const el of allSubHeader) {
//     console.log(el);
//     if (el.innerText === 'content 2 segment') {
//         el.style.color = prompt('Enter color: (red, green, blue ...)');
//     }
// }

//    k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let content_1 = document.getElementsByClassName('content_1');
// console.log(content_1[0].innerText);
// content_1[0].innerText = prompt('Enter new TEXT');


//    l) отримати елементи p та змінити їм padding на 20px

// let p = document.getElementsByTagName('p');
// for (const pElement of p) {
//     pElement.style.padding = '20px';
//     pElement.style.border = '1px solid red'; // для того щоб бачити як змінюються padding
// }

//    m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let m = document.getElementsByClassName('text2');
// console.log(m)
// m[0].innerText = 'dec-2021';