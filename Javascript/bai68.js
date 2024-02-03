// Làm việc với Array

/*
1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
*/

var languages = [
    'Js',
    'Java',
    'Python'
]

// 1. Đổi Array thì string
console.log(languages.toString());

// 2. Đổi tương tự tostring() nhưng cái này cho đổi theo nhiều kiểu, ở cách 2 bên dưới đang thực hiện đổi và từng phần tử sẽ cách nhau 
// bằng dấu ' '
console.log(languages.join());
console.log(languages.join(' '));

// 3. xóa phần tử cuối mảng và trả về phần tử đã xóa
// console.log(languages.pop());
// console.log(languages);
// lưu ý khi trong mảng ko còn phẩn tử nào mà dùng pop() nữa thì khi in mảng sẽ trả về undefined

// 4. Thêm phần tử và trả về độ dài mảng
console.log(languages.push('Dart'))
console.log(languages)

// 5. Xóa phần tử đầu mảng và trả về phần tử đã xóa, ngược với pop()
// console.log(languages.shift()); //tương tự với pop thì nếu xóa hết rồi mà còn shift nữa thì in sẽ ra undefined
// console.log(languages);


// 6. Thêm 1 hoặc nhiều phần tử ở đầu mảng và trả về độ dài mảng
console.log(languages.unshift('C++','C#'));
console.log(languages);

// 7. Xóa, cắt, chèn phần tử mới vào mảng, tên là splicing nhưng dùng là splice chứ không phải ghi nhầm!
languages.splice(1,1); 
// số 1 đầu tiên là vị trí index bắt đầu muốn xóa, số tiếp theo thể hiện muốn xóa bao nhiêu phần tử từ số index bắt đầu đó
// nếu số thứ 2 là truyền 0 thì sẽ không xóa th nào 

console.log(languages);
// còn bây giờ là chèn nè
languages.splice(1,0,'language được chèn bởi splice'); //chèn của th này hơi mệt vì phải có trước đó 2 số nữa :v, xóa hay không xóa đều
// phải điền 2 số ở trước ( không để trống đc luôn) vì th chèn nằm ở mục thứ 3 trong hàm splice(), thằng được thêm sẽ thế vào vị trí 
// ở số index đầu tiên
console.log(languages);

// 8. Dùng để nối Array
var languages2 = [
    'language array2'
]
console.log(languages.concat(languages2));
// mảng nằm trong concat sẽ nằm bên trái

// 9. tương tự với th Splicing thì th slicing dùng là slice(), dùng để cắt element của mảng từ 1 mảng ra, dùng trong trường hợp muốn lấy
// một vài thông tin từ một mảng ra, không muốn cho xem hết tất cả thông tin trong mảng chẳng hạn, không thay đổi mảng gốc
console.log(languages)//in lại mảng để xem hàm slice hoạt động
console.log(languages.slice(1)) //cắt th đầu tiên và in ra, nếu muốn không cắt thì điền số 0
console.log(languages.slice(1, 5)) //cắt 2 th, lưu ý là nó sẽ cắt th đầu tiên ra rồi mới đếm lại để cắt th tiếp theo 
console.log(languages.slice(-2))//cắt ngược, này là từ th có vị trí kế cuối tới hết

// BÀI TẬP F8

/*
Bài 1 Nối chuỗi
function joinWithCharacter(array, charactor) {
    return array.join(charactor)
}


// Ví dụ khi sử dụng
var cars = ['Honda', 'Mazda', 'Mercedes'];

var result = joinWithCharacter(cars, ' - ');

console.log(result); // Expected: "Honda - Mazda - Mercedes"

Bài 2 Lấy phần tử cuối mà ko tác động vào mảng gốc
function getLastElement(array){
    return array[array.length -1]
}
// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

*/


