// Câu lệnh rẽ nhánh If - Else, Switch-case

var date = 2;

if(date === 2){ //lí do === mà không phải == là vì == thì nếu date là '2' thì vẫn true, vẫn chạy cái trong if,
                // vì == nó so giá trị thôi, còn muốn so cả data type nữa thì phải ===
    console.log('hôm nay là thứ 2');
}
else if(date ===3){
    console.log('hôm nay là thứ 3')
}
else {
    'error'
}
// if else, nó chạy th if nào true thì chạy cái trong đó rồi dừng luôn, if sai hết thì chạy th else 

// Bài tập F8
/*
function run(a) {
    if(a%3===0 && a%15 !==0){
        return 1
    } 
    else if (a%5===0 && a%15 !==0){
        return 2
    }
    else if(a%15===0){
        return 3
    }
    else{
        return false
    }
}


// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3
*/

// SWITCH CASE

switch(date){
    case 2: // case này dùng toán tử === để so sánh nên nếu value = '3' thì nó sẽ trả về false
        console.log('hom nay la thu 2');
        break; //dùng break; vì nếu case 2 mà đúng thì nó sẽ trả về mấy cái dưới luôn nên phải break để dừng, k tin comment lại :v
    case 3: 
        console.log('hom nay la thu 3');
        break;
    case 4:
        console.log('hom nay la thu 4');
        break;
    case 5:
        console.log('hom nay la thu 5');
        break;    //cuối rồi nên break hay ko cung duoc
}
//nếu code z thì nó không khác gì so với dùng if nhưng vẫn phải viết để làm rõ ra, cụ thể nó còn dùng để làm những thứ như

switch(date){
    case 2:
    case 3:
    case 4:
        console.log('hom nay la thu 2, 3, 4');
        break;
    case 5:
        console.log('hom nay la thu 5');
        break;
    default: //nếu gt không nằm trong case nào nó sẽ in dòng này, và có break hay không thì nó vẫn chạy th default này
        console.log('khong biet')
}

/* 
--> Kết luận: Nếu cấn so sánh tính đúng sai, lớn hơn, bé hơn, toán tử thì dùng if else cho nhanh, còn nếu như thứ ngày, nhiều case,
biết trước gt để bỏ vào case thì dùng switch case, nhưng ít case (<3 đồ) thì cứ if else cho gọn
*/ 