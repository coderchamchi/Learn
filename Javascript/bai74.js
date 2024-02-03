// Object constructor

function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getFullName =function(){
        // return firstName +' '+ lastName;//nối chuỗi như này cũng được mà phèn, dành cho newbie thôi v:
        return `${this.lastName} Huy ${this.firstName}`;//cách ni vip hơn, khỏi phải để string nháy đơn cộng cộng mẹ gì hết hehe
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

