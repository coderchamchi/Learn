// Math object, mặc dù object nhưng ko có constructor nên không new Math() đc đâu nhé

/*
1. Math.PI
2. Math.round()
3. Math.abs()
4. Math.ceil()
5. Math.floor()
6. Math.random()
7. Math.min()
8. Math.max()
*/

console.log(Math.PI);// in ra số pi
console.log(Math.round(1.3)); //làm tròn
console.log(Math.abs(-2)); //abs là số tuyệt đối ~absolute
console.log(Math.ceil(4.00000001));//làm tròn trên 
console.log(Math.floor(3,999999999));//làm tròn dưới
console.log(Math.random());//tạo số ngẫu nhiên
console.log(Math.ceil(Math.random()*10));//tạo số ngẫu nhiên rồi nhân 10( nhân 10 để nó random từ 0-->10) và làm tròn trên
// làm 1 ví dụ về test đập thẻ thành công trong fc online với mức thẻ +5 full vạch
var percent = Math.random() * 100;
if (percent < 30){
    console.log(percent);
    console.log('Đập thẻ thành công!')
}

console.log(Math.min(-100, 2, 9, 100));//lấy số nhỏ nhất trong các số
console.log(Math.max(-100, 2, 9, 100));//lấy số lớn nhất trong các số

// bài tập F8
var getRandomItem = function(array){
    console.log(array);
    var key = Math.ceil(Math.random() *array.length);
    console.log(key);
    return array[key-1]; //trừ 1 vì key chạy từ 0 --> 3.99(vì có *array.length) mà key dùng hàm ceil làm tròn trên nên nó sẽ trả về max 
    // là = 4, mà bằng 4 thì khi trả về array[4] thì out of index liền, hehe, nên phải trừ 1, không thì lấy floor làm tròn dưới cho khỏe,
    // khỏi phải trừ
}
var array = [
    2,
    4,
    5,
    6
]
console.log(getRandomItem(array));
