// Array trong JS

/*
1. Tạo mảng
    - Cách tạo 
    - Sử dụng cách nào? Tại sao?
    - Kiểm tra Data type
2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/
// 1.
// trong mảng chứa được hết tất cả các kiểu dữ liệu 
// cách tạo thứ nhất 
var languages = [
    'JS',
    'Java',
    null,
    'Python',
    undefined,
    function(){

    },
    {}
]
// cách tạo thứ 2 ~ tương tự khi đã nói với những bài trước, không nên tạo new nếu array chứa những thứ đơn giản, new làm ngốn dung lượng
var languages2 = new Array(
    'JS',
    'Java',
    null,
    'Python',
    undefined,
    function(){

    },
    {}
)
console.log(Array.isArray(languages));
console.log(Array.isArray(languages2));
// Array có data type là object, tuy nhiên vẫn có thằng {} nó cũng có data type là object, vậy nên muốn check 1 biến có phải là array hay
// không thì đến với vd dưới

console.log(typeof []); //object
console.log(typeof {}); //object
console.log(Array.isArray([])); //true
console.log(Array.isArray({})); //false

//2. 
console.log(languages.length); //truy xuất độ dài mảng
console.log(languages[1]); //truy xuất phần tử theo index

