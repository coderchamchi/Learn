/* 
// 1 số điều cần biết về function

1. Khi function đặt trùng tên?
2. Khai báo biến trong hàm?
3. Định nghĩa hàm trong hàm?
---biến và hàm ở trong hàm đều chỉ dùng được trong hàm đó -->private hết nhé
*/
// 1.
function showlog(message){
    console.log(message+' function1')
}
function showlog(message){
    console.log(message+' function2')
}
showlog('đây là');
// 2 hàm giống tên nhưng khi hoạt động nó trả về th thứ 2, th thứ 1 mất cmnr

// 2.
function show(){
    var message = 'hello';
    console.log(message);
}
show();
// định nghĩa biến trong hàm nè

// 3.
function show3(){
    function show4(){
        var message = 'hi';
        console.log(message)
    }
    // khai báo th hàm show4 trong hàm show3
    show4();
    // gọi hàm show4 để nó hoạt động
}
show3();
