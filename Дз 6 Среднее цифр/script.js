var a = +prompt('Введите первое число');

var b = +prompt('Введите второе число');

var c = +prompt('Введите второе число');


if(a < b && a > c){
    alert('Ваше среднее число ' + a);
}else if(b < a && b > c){
    alert('Ваше среднее число ' + b);
}else if(c < b && c > a){
    alert('Ваше среднее число ' + c);
}else if(a < c && a > b){
    alert('Ваше среднее число ' + a);
}else if(b < c && b > a){
    alert('Ваше среднее число ' + b);
}else if (c < a && c > b){
    alert('Ваше среднее число ' + c);
}else{
    alert('Вы ввели равные числа')
}












