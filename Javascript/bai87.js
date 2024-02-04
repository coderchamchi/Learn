// Toán tử 3 ngôi ~ ternary operator

var course = {
    name: 'Js',
    coin: 250
}

if(course.coin >0){
    console.log(`${course.coin} coins`);
}
else{
    console.log('mien phi');
}

// còn bây giờ là đoạn code thể hiện 3 ngôi, 3 ngôi là 3 vế

var coin = course.coin > 0 ? `${course.coin} coins` : 'miễn phí';
// nếu  lớn hơn 0 thì in ra cái sau dấu chấm (~ vế thứ 2) còn không thì ngược lại là in cái sau dấu chấm(~ vế thứ 3) 

// BÀI TẬP F8
/*

Để vượt qua thử thách này bạn cần tạo hàm getCanVoteMessage, hàm này có 1 tham số là age. 
Trong trường hợp từ 18 tuổi trở lên hàm sẽ trả về Bạn có thể bỏ phiếu, ngược lại hàm trả về Bạn chưa được bỏ phiếu.

var getCanVoteMessage = function(age){
    var cond = age > 18 ? "Bạn có thể bỏ phiếu": "Bạn chưa được bỏ phiếu";
    return cond;
}

// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'
*/
