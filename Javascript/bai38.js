// Toán tử logical và câu lệnh điều kiện if


// Trước tiên làm rõ lại tí em toán tử so sánh
var a = 1;
var b = 2;
var result = a<b && a<1;
console.log(result) //chỗ này in ra false không phải là vì có && mà 1 trong 2 sai mà trả về false mà cụ thể nó sẽ hoạt động là vế đầu đúng
// nó sẽ xét tiếp vế sau, nếu đúng thì xét tiếp còn sai thì trả về false luôn, cụ thể xem tiếp 1 vd tiếp theo

/*
Những trường gt thuộc về false
    null
    false
    NaN
    0
    ''-""
    undefined
Không nằm trong 6 cái này đều về true hết
*/ 

var ex1 = 'A' && 'B';//cái này nếu như lúc trước thì sẽ nghĩ là 1 trong 2 không nằm trong 6 cái thuộc false thì nó trả true đúng không,
// nhưng đéo, cái đó chỉ trong câu điều kiện thôi còn bây giờ nó sẽ phụ thuộc vào toán tử logic &&, cụ thể th đầu nếu không thuộc 6 cái
// false thì nó xét tiếp th sau, nếu xét tới hết mà vẫn không thì nó sẽ in ra th cuối cùng chứ cũng không trả về true, còn nếu xét tới 
// th nào mà nằm trong 6 giá trị false thì nó trả về gt đó luôn và k xét mấy th sau luôn

console.log(ex1);
var rs = 0 && 'A'//cái này trả về 0
console.log(rs);

// tiếp tục ví dụ này
var check = 'A' && 0 && 'C';
if(check){
    console.log('true')//ở đây vì check có giá trị thuộc fasle nên chỗ if nó convert thành boolean sẽ trả về false, nó không thực thi 
    // khối trong if mà nhảy xuống else
}
else{
    console.log('false')
}

// Toán tử hoặc ~ ||

var check2 = 'A' || 0 || 'C';
console.log(check2)
// cái th || này nó khác với && là nếu mà bắt th đầu tiên trong check2 không nằm trong 6 th thuộc false thì lấy luôn, còn giá sử th đầu
// không phải là 'A' mà nó là null chẳng hạn thì th đầu với th 2 bỏ, nó trả về C, th cuối cùng