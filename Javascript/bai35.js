// Toán tử so sánh phần 2

/**
 * ===
 * !==
 */

// Đặt vấn đề 
var a = 1;
var b = 1;
console.log(a==b)//ở đây thì nó trả true rồi nhưng mà
var c = '1';
console.log(a==c)//wtf 1 cái number 1 cái string mà vẫn true :V
// cụ thể thì khi dùng == thì nó so giá trị thôi có nghĩa là string hay number thì nó vấn là 1, nên vẫn true, còn muốn so cả về data type
// nữa thì phải dùng === hoặc !==

console.log(a===c)//trả về false liền 

console.log(Boolean(a));


