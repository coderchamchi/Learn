// Object Prototype 
// 1. Prototype là gì? 
// 2. Sử dụng khi nào?

function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getFullName =function(){
        // return firstName +' '+ lastName;//nối chuỗi như này cũng được mà phèn, dành cho newbie thôi v:
        return `${this.lastName} ${this.firstName}`;//cách ni vip hơn, khỏi phải để string nháy đơn cộng cộng mẹ gì hết hehe
    }
}

var author = new User('Nam','Phan','khong co');
console.log(author);

var user = new User('Vũ', 'Phan', 'khong co');
console.log(user);

console.log(author.constructor === User); //check var xem th author phải được tạo từ constructor của user hay ko

//Vì object author với user có các property khác nhau nên không đổi property từ th user mà sẽ thêm sau, vd

author.title = 'vip pro coder'
user.comment = 'i like this course'
console.log(author);
console.log(user);
console.log(author.getFullName());

// giả sử thêm 1 thuộc tính để thể hiện cả author với user đều học F8, vì thuộc tính chung nên thẳng từ constructor, vì lỡ nhiều object
// mà cứ đi thêm từng th thì khá lâu nên sử dụng cách sau
User.prototype.className = 'F8';
console.log(author); //th classname nằm ở Prototype chứ nó không hiện rõ như các thuộc tính firstname, lastname đâu nhé
console.log(author.className); // F8 
// hoặc cũng có thể dùng prototype với methods
User.prototype.getClassName = function(){
    return this.className
}
console.log(author.getClassName());

/* Làm bài tại đây
function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
Student.prototype.getFullName= function(){
    return `${this.firstName} ${this.lastName}`;
}


// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'
*/