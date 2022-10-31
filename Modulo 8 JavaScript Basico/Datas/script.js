//var d = new Date(year, month, day, hours, minutes, seconds, miliseconds);

//Criando data passando ano, mês, dia, hora e minuto
var a = new Date(2020,08,20, 02, 45);

//Criando data passando milissegundos (a partir de 1969 às 16:00 no horário do pacífico)
var b = new Date(1000 * 60 * 60 * 24);

//Criando data com string
var c = new Date("sep 05 2017 23:25");
//              ("05/25/1999")
//              ("05-25-1999")

//
var d = new Date();


//Ano
console.log(a.getFullYear());

//Dia 0-31
console.log(b.getDate());

//Dia da semana 0-6
console.log(c.getDay());

//Hora
console.log(a.getHours());

//Minutos
console.log(a.getMinutes());

//Segundos
console.log(a.getSeconds());

//Milissegundos
console.log(a.getMilliseconds());

//Mês
console.log(a.getMonth());

//Modificando o ano
console.log(a.setFullYear(2020));
//O mesmo se aplica para mês, dia, hora, minuto...