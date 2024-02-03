// Làm việc với chuỗi


var myString ='day la chuỗi la chuỗi la chuỗi';

// 1. Length
console.log(myString.length);

// 2. Find index
console.log(myString.indexOf('la'));
// còn nếu tìm 1 giá trị nào đó ko có trong chuỗi thì nó sẽ luôn =-1
console.log(myString.indexOf('la',6));
// hoặc nếu trường hợp có 2 từ giống nhau, muốn tìm vị trí của từ tiếp theo, ở đây là từ 'la' thì sẽ đêm từ đầu tới hết từ 'la' kết thúc 
// dừng tại index bao nhiêu thì cộng thêm 1, ở vd là 'day la' kết thúc tại chữ a và có index = 5 cộng thêm 1 sẽ = 6 ==> chữ 'la' tiếp
// theo ở vị trí index = 13
console.log(myString.lastIndexOf('la'));
// còn nếu muốn tìm vị trí của th có kí tự là 'la' xuất hiện cuối cùng thì dùng lastIndexof 

console.log(myString.search('la'));
// hoặc có thể dùng search để tìm kiếm vị trí index
// 3. Cut string
var myString1 = 'Day La Chuoi!';
console.log(myString.slice(4,6));//cắt từ index =4 đến =6, cắt hết từ 4 thì điền start thôi, khỏi điền end ~ slide(4) thui, còn cắt 
// nguyên chuỗi thì slice(0).
// hoặc có thể cắt ngược, ví dụ slice(-4,-1)

// 4. Replace
console.log(myString1.replace('Chuoi','Chuoi sau khi dung replace'));
// nhưng mấy cái string đơn giản không lặp mới dùng được, ví dụ
console.log(myString.replace('chuỗi','chuỗi sau khi dùng replace'));//dùng cách này thì mấy cái chuỗi sau nó không replace được, vậy
// nền phải dùng biểu thức chính quy
console.log(myString.replace(/chuỗi/g,'chuỗi biểu thức chính quy'));

// 5. Upper case
console.log(myString1.toUpperCase());

// 6. Lower case
console.log(myString1.toLowerCase());

// 7. Trim ~ để cắt khoảng trắng 2 đầu
var stringfortrim = ' sbc  ';
console.log(stringfortrim);
console.log(stringfortrim.trim());

// 8. Split ~ cắt một chuỗi thành 1 array
var language = 'Js, Java, Python';
console.log(language.split(', ')); //tách ra theo ', '
var language2 = 'javascript';
console.log(language2.split('')); //cắt từng kí tự trong chuỗi;

// 9. Get a character by index
console.log(language2.charAt(5));
console.log(language2[5]);
// 2 cách đều dùng để lấy ra kí tự theo số index, tuy nhiên nó khác ở chỗ th charAt nếu index truyền vào tại ví không có ở trong chuỗi,
// nghĩa là vượt quá length, thì nó không trả về gì cả, còn th dưới thì nó trả về undefined