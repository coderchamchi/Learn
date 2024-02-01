// Tham số hàm - Javascript

/*
1. Tham số?
    - Định nghĩa?
    - Kiểu dữ liệu? // khác với java, bên js khai báo tham số trong hàm không cần khai báo kiểu dữ liệu luôn :v, truyền vô là nó tự hiểu 
    - Tính private? // tham số ở trong mỗi hàm đều private
    - 1 tham số
    - Nhiều tham số
2. Truyền tham số?
    - 1 tham số
    - Nhiều tham số
3. Arguments?
    - Đối tượng arguments
    - Giới thiệu vòng for of
*/
function writeLog(message){
    console.log(message);
    console.log(typeof(message));
}
writeLog('ham nay de ghi log');

writeLog('keke');

writeLog(1);

writeLog(undefined);

function sumTwoNumber(a, b){
    return  a + b;
}
console.log(sumTwoNumber(60,9));

// 3.
function writeLog1(){
    console.log(arguments)
}
writeLog1('phan','huy','nam');

function writeLog2(){
    var myString = '';
    for( var param of arguments){
        // myString += `${param} - `
        myString += param; //cộng chuỗi vẫn được nhưng dòng trên khác là ở chỗ sau mỗi param cộng thêm '-', dùng $ mới làm đc
    }
    console.log(myString)
}
writeLog2('phan','huy','nam');