/**
If -Else

 */

// var num1 = 1;
// var num2 = 2;

// var isTrue = num1 > num2;

// if(isTrue){
//     console.log('True');
// }
// else{
//     console.log('false');
// }

var name = 'nam huy phan';
if(name){
    console.log('true');
    // ở đây js trả về true vì nếu nằm trong if là chuỗi chỉ cần khác những giá trị như
    /**
    * 0
    * false
    * '' - ""
    * undefined
    * NaN
    * null
    // còn nếu giá trị là 1 trong những thứ như trên thì sẽ trả về false, và nếu là false thì nó nhảy vào cái else để trả về
    chứ không in ra cái cosole.log trong đoạn code trong if
     */ 
}
else{
    console.log('false')
}

/**
Toán tử logical
var a = true;
var b = false;
var c = a || b;
var d = b && c;

console.log(c, d); //cái này sẽ in ra true và false, vì c là toán tử hoặc mà hoặc nếu 1 trong 2 giá trị là true thì nó sẽ là true, còn 
d là toán tử và, và thì 1 trong 2 mang giá trị là false thì sẽ là false luôn
 */