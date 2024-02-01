/*

1. Hàm?
    - Một khối mã
    - Làm một việc cụ thể

2. Loại hàm?
    - Built-in
    - Tự định nghĩa

3. Tính chất
    - Không thực thi khi được định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị
*/
//Tạo hàm đầu tiên

function sum(){
    console.log('ham nay de tao sum :v')
}

function sum2num( a, b){
    return a + b;
}

var num1 = 1;
var num2 = 2;

console.log(sum2num(num1,num2));