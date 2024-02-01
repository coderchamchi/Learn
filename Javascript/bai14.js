/**
 * Toán tử số học
  +         --> Cộng
  -         --> Trừ
  *         --> Nhân
  **        --> Lũy thừa
  /         --> Chia
  %         --> Chia lấy dư
  ++        --> Tăng 1 giá trị số
  --        --> Giảm 1 giá trị số
 */

// +
var a = 5;
var b = 2;
var c = a + b;
// console.log(c)   


// console.log(a - b);
// console.log(a * b);
// console.log(a ** b);
// console.log(a / b);
// console.log(a % b);

// ++
a++
// console.log(a); //trước đó có a++ nên bây giờ a=6 rồi

// --
a--
// console.log(a); //trước đó có a-- nên bây giờ a=5 lại

// Ở 2 loại toán tử cuối này có 1 cái đặc biệt là

console.log(a); //bây giờ a = 5 nha
console.log(a++); // có a++ đáng nhẽ cái này in luôn a = 6 nhỉ, nhưng đ' nó in =5 thôi vì ++ nằm ở sau, nên js nó chưa cho tăng
console.log(a); //bây giờ nó mới cho tăng, và nó sẽ = 6
a-- //refresh về 5 lại phát
console.log('refresh')
console.log(++a); //ở đây thì nó lại bằng 6 được luôn vì ++ nó nằm trước biến a, tương tự đối với --.

/**

                        Tổng kết
x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
--x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm

 */