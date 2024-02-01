/**
Kiểu dữ liệu trong Javascript

1. Dữ liệu nguyên thủy - Primitive Data
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol

2. Dữ liệu phức tạp - Complex Data
    - Function
    - Object
 */

// String.

var fullName = 'Phan Huy \'Nam\'';  //ở đây muốn in nam trong một cặp nháy đơn( hay nháy kép) thì phải thêm 2 dấu chéo js mới hiểu nhé
                                    //Hoặc không thì phải để nháy ngoài là kép nháy trong là đơn hoặc ngược lại thì js mới hiểu, vd như 
                                    // var fullName = "Phan Huy 'Nam'";
                                    // var fullName = 'Phan Huy "Nam"';                           
console.log(fullName);
// Code kiểm tra kiểu dữ liệu
console.log(typeof(fullName));

// Boolean.
var isTrue = true; //lưu ý không có nháy kép nhé, có nháy là về kiểu string
console.log(typeof(isTrue));

// Undefined.
var age; //không gán giá trị cho biến gọi là undefined
// console.log(age); //đây nó sẽ in ra là underfined vì không có gt nào được gán cho biến age
console.log(typeof(age));

// Null.
var isNull = null; //in ra thì ra null thoi
console.log(typeof(isNull)); // th ni kiểu dữ liệu null mà check typeof để xem kiểu dữ liệu thì nó lại là object :v wtf javascript

// Symbol.
var id = Symbol('id');//gt này unique nhé
var id2 = Symbol('id');//gt này unique nhé

// console.log(id==id2);//chỗ này ra false luôn mặc dù gt của 2 th đều là id nè, cái này dùng trong trường hợp kiểu như tính điểm cho sinh 
// viên trong lớp mà sợ trường hợp có sv giống tên, khai báo symbol rồi gán điểm cho đỡ bị rơi vào trường hợp thằng Nguyễn A 10 điểm 
// gán cho A 10, rồi có thằng phan A 11 điểm, rồi gán lại là A 11 điểm, dùng symbol nó hiển thị cả 2 còn ko dùng thì có một th A là 11đ thoi
console.log(typeof(id));

// Function.
var myFunction = function(){
    console.log('hello world')
}
//  khai báo rồi nhưng chưa gọi nên tới ngang này nó sẽ chưa in ra
myFunction(); // bây giờ đã gọi rồi nên nó mới in ra
console.log(typeof(myFunction));

// Object types
// Object là theo kiểu key, value và ngoặc kép
var myObject = {
    name:'Nam',
    age:11,
    address:'Hue',
    myFunction: function(){
        console.log("hello, I'm Nam")
    }
}
// console.log(myObject);
console.log(typeof(myObject));

// Array, th này cũng key, value đó nhưng mình không cần nhập key, key nó tự tăng nên nhập value thôi
var myArray = [
    'Java',
    'JavaScript',
    'PHP'

]

console.log(myArray);
console.log(typeof(myArray));

/* Làm tí ví dụ
var a = '1';
var b = 2;

var c = typeof a;
var d = typeof b;
var e = typeof d;

console.log(c, d, e)
//kết quả string number string nhé, vì d là trả về number nhưng number ở d rõ hơn là d='number' chứ không phải number :v,
//vì typeof nó luôn trả về kiểu dữ liệu là string nên đừng nhầm lẫn nhé 
*/


