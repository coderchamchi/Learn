// // Kiểu dữ liệu số
// /*
// Phương thức	Vai trò
// Number.isFinite()	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
// Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
// Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
// Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên
// Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
// Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi
// */
// // Khai báo cách 1 đối với số được gán
// var million = 1000000;
// // khai báo cách 2
// var million = 1e6; // tương tự: 1000000

// // cách khai báo bằng new ~ cách này tạo ra 1 th object luôn, không cần thiết phải dùng với khai báo là 1 số đơn giản như vd là 9, ngốn bộ nhớ
// var number = new Number(9);
// console.log(number);
// console.log(typeof number);

// // hoặc

// var billion = 2e9; // tương tự: 2000000000 (hai tỉ)

// Number.isFinite(2 / 0); // false
// Number.isFinite(20 / 5); // true
// Number.isFinite(0 / 0); // false

// Number.isInteger(999999999); // true
// Number.isInteger(0.2);       // false
// Number.isInteger(Math.PI);   // false

// Number.parseFloat('10') // 10
// Number.parseFloat('10.00') // 10
// Number.parseFloat('238,21') // 238
// Number.parseFloat('237.22') // 237.22
// Number.parseFloat('34 56 78') // 34
// Number.parseFloat(' 37 ') // 37
// Number.parseFloat('18 is my age') // 18

// Number.parseInt('10') // 10
// Number.parseInt('10.00') // 10
// Number.parseInt('238,21') // 238
// Number.parseInt('237.22') // 237
// Number.parseInt('34 56 78') // 34
// Number.parseInt(' 37 ') // 37
// Number.parseInt('18 is my age') // 18

// var numberObject = 1234.56789;  
// numberObject.toFixed(); // '1235'
// numberObject.toFixed(1); // '1234.6'
// numberObject.toFixed(6); // '1234.567890'

// (11).toString();    // '11'
// (18).toString();     // '18'
// (17.3).toString();   // '17.3'

// Number("123"); // returns the number 123
// Number("123") === 123; // true

// Number("unicorn"); // NaN
// Number(undefined); // NaN
// // NaN là khi không phải số nên trả về NaN
// var number2 = 20/ '5 lốp';
// console.log(number2);
// console.log(isNaN(number2)) //true

// function isNumber(value){
//     if(typeof(value)=='number')
//         return true
//     else
//         return false
// }


// function isNumber(value) {
//     return typeof value === 'number';
// }
// tương tự như trên nhưng cách này gọn hơn thay vì dùng == thôi, == thì đang so sánh thôi còn === là giống thì tự trả về true
// khác tự trả về false luôn, khỏi phải return


// Expected results:
// console.log(isNumber(999)); // true
// console.log(isNumber('abc')); // false
// console.log(isNumber('100')); // false

// tuy nhiên NaN vẫn được coi là number nên hàm trên chưa tối ưu, vì z nên có hàm dưới 


function isNumber(value) {
    if (isNaN(value)){
        return false;
    }    
    else{ 
        return typeof value === 'number';   
    }
}


// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false