//Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
//n + nn + nnn, где n не перемножаются, а конкатенируются
const n = 10;
if (typeof n !== 'number' || !Number.isInteger(n) || n < 1 || n > 9) {
    console.log("invalid number");
} else {
    console.log (n +  Number(''+ n+ n) + Number('' + n + n + n)); 
    //Так как n задано как 10, он не проходит проверку (так как n > 9), и будет выведено 
    //"invalid number". Если бы n было, например, 3, то результатом вывода было бы 369.
}