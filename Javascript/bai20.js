/** Advance Tiền tố và hậu tố
Toán tử
Prefix & Postfix ~ Tiền tố và hậu tố
2 thằng này khác nhau ở thời điểm thực thi nhé, cụ thể xem ví dụ ở dưới
 */
// Ôn lại tí
var number = 6;
console.log(number++); //ở đây hậu tố nên nó chưa lên 7 được, chỉ mới = 6 nhé
console.log('refresh'); //refresh lại để về số đầu cho đỡ rối, sau này hiểu rồi thì có thể xóa dòng này và dòng trên
number-- //lúc này number về lại = 6 rồi nhé
console.log(++number);//ở đây vì hậu tố nên nó hiện ra =7 luôn nhé, cụ thể thì nó sẽ hoạt động như sau, xem thêm 1 ví dụ nữa để thông não

console.log('ví dụ thông não!')

var number2 = 6;

//Việc 1: +1 cho a, a = a + 1 ==> a = 7
//Việc 2: Trả về a sau khi được +1, tương tự với --
a = ++number2;
console.log(a)

// bây giờ number2 đang =7 nha, còn nếu dùng hậu tố thì 
a = number2++;
// Việc 1: `number2 copy`, `number2 copy` = 7
// Việc 2: cộng 1 của number2, number2 = number2 + 1 ==> number2 = 8 
// Việc 3: trả về `number2 copy` 
console.log(a); 
console.log(number2);//number thì =8. nhưng mà a vẫn chỉ =7 thôi, dùng tiền tố thì a mới =8 luôn.

console.log('refresh');
console.log('number2 =', number2);
a = ++number2;
console.log('a =', a);
console.log('number2 =', number2);
// đấy, nếu dùng tiền tố thì nó trả về luôn

console.log('vọc tí nữa, number2 lúc này đang bằng 9');
console.log(number2++);
console.log(number2);   //dài dòng quá nhưng dần hiểu ra thì nó xảy ra sau 1 event gì đó đối với hậu tố còn tiền tố xảy ra luôn, như ở đây
                        //khi nhìn console của 'inspec' thì thấy ở trên nó bằng 9, xuống dưới mới =10
console.log(++number2); //còn dùng tiền tố thế này thì nó cộng rồi ra thẳng luôn sau khi đã cộng
                        // không cần thêm 1 dòng như console.log như vd trên
console.log('làm quả ví dụ này cho chắc này~!')

var number = 6;

var output = number++ + --number; //kết quả =12 nhưng nó không phải là 7 + 5 mà là 6 + 6
console.log(output);
// Việc 1: number++,mặc dù +1 nhưng nó sẽ trả về biến copy thôi ==>number++ =6
// Việc 2: thực hiện toán tử "+"
// Việc 3: --number, ở đây nó sẽ hoàn thành và trả về giá trị của number++ (vì sau một event), có nghĩa bây giờ number sẽ được =7, rồi nó thực hiện luôn
// -1 vì là tiền tố --number nên number ở sau = 6
// ==> nó sẽ là 6 + 6, không phải 7 + 5!!!




