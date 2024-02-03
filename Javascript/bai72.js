// Object trong java



// khai báo
var emailKey = 'email2'; //thêm key bằng value từ biến

var myObject = {
    name: 'Nam',
    age: 18,
    address: 'hue, VN',
    [emailKey]:'email được tạo bằng biến',//thêm bằng biến thì phải có []
    getName : function(){
        return this.name; // tương tự với myObject.namee thôi nhưng dùng this thì tiện vì lỡ sau ni đổi myObject lại thành gì đó thì this vẫn hoạt động
    }
}

// Function --> Phương thức ~ methods
// Others   --> Thuộc tính ~  property

// thêm một key là email, value là namphan@gmail.com'' vào object
myObject.email = 'namphan@gmail.com';

console.log(myObject);
console.log(myObject.address); // lấy value từ key
console.log(myObject.abc); //nếu muốn in 1 key mà ko có trong object thì nó trả về undefined 
console.log(myObject.getName()); //chỗ này getName() có dấu ngoặc vì vừa là key vừa là hàm nên phải gọi ra, không gọi ko hoạt động :v

var myKey = 'address';
console.log(myObject[myKey]);
// có thể dùng cách này để lấy ra 1 value từ value được lấy ra từ biến, value này thành key, tuy nhiên nó không dùng .myKey như vd trên
// mà phải dùng [myKey] nữa

delete myObject.address; //xóa đi một key trong object
delete myObject[emailKey]; //xóa đi một key trong object, tương tự thì thao tác với key là biến phải có []
console.log(myObject);




