var nums = [2, 6, 7, 13, 22, 23, 33, 42, 52, 64, 65, 67, 68, 69, 78, 87, 99, 100, 101, 111, 123, 125, 150, 200, 228, 300, 333, 666, 777, 993]

var tii = {
  name: "странни типок", 
  age: 0, 
  iq: 2,
  bsh: true, 
   opros: {
    pukal: true, 
    umni: false, 
    hgdfsh: true, 
    word: "pepe", 
    chislo: 9 } }

html {
--bobi: rgba(255, 40, 0, 0.5);
--txt: black;
--herd: linear-gradient(#ff9696, red, orange, #909090);
}

if(temno = true) {
--bobi: rgba(50, 50, 50, 0.5);
--txt: white;
--herd: #aaaaaa;
}

var frazi = [
  "Привет, " + tii.name, 
  "Приветствую снова, " + tii.name, 
  "Хай, " + tii.name, 
  "Что занесло тебя в эти края, " + tii.name, 
  "О, " + tii.name + " здарова", 
  "Твой айкью – " + tii.iq + " верно? ", 
  "Эуэуээуэ", 
  "Птенцы кричат от голода", 
  "Робуксы... Дай мне робуксы... ", 
  "Я Ванга. Вижу, что тебя зовут" + tii.name
  ]

var rambom = Math.floor(Math.random() * frazi.length);
var result = frazi[rambom];

document.getElementById("herd").innerHTML = result;
