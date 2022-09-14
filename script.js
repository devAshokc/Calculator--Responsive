var divElement = document.createElement('input');
divElement.setAttribute('class', 'screen p-0 w-100 text-light');
divElement.setAttribute('id', 'screen');
document.body.append(divElement);
var columndiv1 = document.querySelector('.col1');
columndiv1.append(divElement);

// first row arithmatic operations button

var button1 = document.createElement('button');
button1.setAttribute('class', 'btn w-100 h-100')
button1.setAttribute('id', 'butn')
button1.innerText = '*'
var columndiv3 = document.querySelector('.col3');
columndiv3.append(button1);

var button2 = document.createElement('button');
button2.setAttribute('class', 'btn w-100 h-100')
button2.setAttribute('id', 'butn')
button2.innerText = '/'
var columndiv4 = document.querySelector('.col4');
columndiv4.append(button2);

var button3 = document.createElement('button');
button3.setAttribute('class', 'btn w-100 h-100')
button3.setAttribute('id', 'butn')
button3.innerText = '-'
var columndiv5 = document.querySelector('.col5');
columndiv5.append(button3);

var button4 = document.createElement('button');
button4.setAttribute('class', 'btn w-100 h-100')
button4.setAttribute('id', 'butn')
button4.innerText = '+'
var columndiv6 = document.querySelector('.col6');
columndiv6.append(button4);

// second row containing numbers

var button5 = document.createElement('button');
button5.setAttribute('class', 'btn w-100 h-100')
button5.setAttribute('id', 'butn')
button5.innerText = '9'
var columndiv7 = document.querySelector('.col7');
columndiv7.append(button5);

var button6 = document.createElement('button');
button6.setAttribute('class', 'btn w-100 h-100')
button6.setAttribute('id', 'butn')
button6.innerText = '8'
var columndiv8 = document.querySelector('.col8');
columndiv8.append(button6);

var button7 = document.createElement('button');
button7.setAttribute('class', 'btn w-100 h-100')
button7.setAttribute('id', 'butn')
button7.innerText = '7'
var columndiv9 = document.querySelector('.col9');
columndiv9.append(button7);

var button8 = document.createElement('button');
button8.setAttribute('class', 'btn w-100 h-100')
button8.setAttribute('id', 'butn')
button8.innerText = '6'
var columndiv10 = document.querySelector('.col10');
columndiv10.append(button8);

// third row containing remaining numbers

var button9 = document.createElement('button');
button9.setAttribute('class', 'btn w-100 h-100')
button9.setAttribute('id', 'butn')
button9.innerText = '5'
var columndiv11 = document.querySelector('.col11');
columndiv11.append(button9);

var button10 = document.createElement('button');
button10.setAttribute('class', 'btn w-100 h-100')
button10.setAttribute('id', 'butn')
button10.innerText = '4'
var columndiv12 = document.querySelector('.col12');
columndiv12.append(button10);

var button11 = document.createElement('button');
button11.setAttribute('class', 'btn w-100 h-100')
button11.setAttribute('id', 'butn')
button11.innerText = '3'
var columndiv13 = document.querySelector('.col13');
columndiv13.append(button11);

var button12 = document.createElement('button');
button12.setAttribute('class', 'btn w-100 h-100')
button12.setAttribute('id', 'butn')
button12.innerText = '2'
var columndiv14 = document.querySelector('.col14');
columndiv14.append(button12);

// fourth row also containing numbers and operators

var button13 = document.createElement('button');
button13.setAttribute('class', 'btn w-100 h-100')
button13.setAttribute('id', 'butn')
button13.innerText = '1'
var columndiv15 = document.querySelector('.col15');
columndiv15.append(button13);

var button14 = document.createElement('button');
button14.setAttribute('class', 'btn w-100 h-100')
button14.setAttribute('id', 'butn')
button14.innerText = '0'
var columndiv16 = document.querySelector('.col16');
columndiv16.append(button14);

var button15 = document.createElement('button');
button15.setAttribute('class', 'btn w-100 h-100')
button15.setAttribute('id', 'butn')
button15.innerText = '.'
var columndiv17 = document.querySelector('.col17');
columndiv17.append(button15);

var button16 = document.createElement('button');
button16.setAttribute('class', 'btn w-100 h-100')
button16.setAttribute('id', 'butn')
button16.innerText = '%'
var columndiv18 = document.querySelector('.col18');
columndiv18.append(button16);

// last row containing only two element to clear input

var button17 = document.createElement('button');
button17.setAttribute('class', 'btn w-100 h-100 text-white')
button17.setAttribute('id', 'butn')
button17.innerText = 'C'
var columndiv19 = document.querySelector('.col19');
columndiv19.append(button17);

var button18 = document.createElement('button');
button18.setAttribute('class', 'btn w-100 h-100 text-white')
button18.setAttribute('id', 'butn')
button18.innerText = '='
var columndiv20 = document.querySelector('.col20');
columndiv20.append(button18);

// writing function for calculator

button1.addEventListener('click', () => {
    divElement.value += button1.innerText;
    // divElement.value = divElement.value + button1.innerText;
})

button2.addEventListener('click', () => {
    divElement.value += button2.innerText;
})

button3.addEventListener('click', () => {
    divElement.value += button3.innerText;
})

button4.addEventListener('click', () => {
    divElement.value += button4.innerText;
})

button5.addEventListener('click', () => {
    divElement.value += button5.innerText;
})

button6.addEventListener('click', () => {
    divElement.value += button6.innerText;
})

button7.addEventListener('click', () => {
    divElement.value += button7.innerText;
})

button8.addEventListener('click', () => {
    divElement.value += button8.innerText;
})

button9.addEventListener('click', () => {
    divElement.value += button9.innerText;
})

button10.addEventListener('click', () => {
    divElement.value += button10.innerText;
})

button11.addEventListener('click', () => {
    divElement.value += button11.innerText;
})

button12.addEventListener('click', () => {
    divElement.value += button12.innerText;
})

button13.addEventListener('click', () => {
    divElement.value += button13.innerText;
})

button14.addEventListener('click', () => {
    divElement.value += button14.innerText;
})

button15.addEventListener('click', () => {
    divElement.value += button15.innerText;
})

button16.addEventListener('click', () => {
    divElement.value += button16.innerText;
})

// evaluating the result

button18.addEventListener('click', () => {

    if (divElement.value === "") {
        divElement.value = '';
    } else {
        let answer = eval(divElement.value);
        divElement.value = answer;
    }
})


// clear the text box

button17.addEventListener('click', () => {
    divElement.value = "";
})