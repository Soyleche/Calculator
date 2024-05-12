
const display = document.getElementById('display');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btndot = document.getElementById('btndot');
const btnpos_neg = document.getElementById('btnpos_neg');
const btnadd = document.getElementById('btnadd');
const btnsub = document.getElementById('btnsub');
const btntimes = document.getElementById('btntimes');
const btndiv = document.getElementById('btndiv');
const btnequal = document.getElementById('btnequal');;
const btnclear = document.getElementById('btnclear');

let input = ''; 
let result = '';

btn0.addEventListener('click', addnumber.bind(null,'0'));
btn1.addEventListener('click', addnumber.bind(null,'1'));
btn2.addEventListener('click', addnumber.bind(null,'2'));
btn3.addEventListener('click', addnumber.bind(null,'3'));
btn4.addEventListener('click', addnumber.bind(null,'4'));
btn5.addEventListener('click', addnumber.bind(null,'5'));
btn6.addEventListener('click', addnumber.bind(null,'6'));
btn7.addEventListener('click', addnumber.bind(null,'7'));
btn8.addEventListener('click', addnumber.bind(null,'8'));
btn9.addEventListener('click', addnumber.bind(null,'9'));
btndot.addEventListener('click', adddecimal.bind(null,'.'));
btnpos_neg.addEventListener('click', PostiveOrNegative);
btnadd.addEventListener('click', addoperator.bind(null,'+'));
btnsub.addEventListener('click', addoperator.bind(null,'-'));
btntimes.addEventListener('click', addoperator.bind(null,'*'));
btndiv.addEventListener('click', addoperator.bind(null,'/'));
btnequal.addEventListener('click', calculate);
btnclear.addEventListener('click', clearDisplay);

function clearDisplay(){
    input = '';
    display.value = '';
}

function addnumber(number) {
    if (input === '0') {
        input = number;
    } else if (input.endsWith('0') && !isLastCharOperator()) {
        input = input.slice(0, -1) + number;
    } else {
            input += number;
        }
        display.value = input;
    }