// Đối với Cookie //lưu mãi khi nào quá expires thì mới mất đi
// const cookiein4 = document.cookie = `name=Nam; expires=${new Date('2024-01-12 10:00:00').toUTCString()}`;
// // cách tạo một cookie, ở đây set là Name = name và value = Nam, với hạn là vào 10h sáng ngày 12 tháng 1 năm 2024.
// // Ở đây cái ${new Date('2024-01-12 10:00:00').toUTCString()}` gọi là GMT format. Nếu mà set expires = 2024-01-12 10:00:00 luôn thì 
// // cookie đ' hiểu và nó sẽ hiển thị phần Expires/ Max age là session thôi, không hiển thị đúng với thời gian mình set nên nếu muốn nó
// // hiểu thì phải để đúng định dạng GMT format.
// console.log(cookiein4);

// Đối với Local Storage //lưu mãi mãi, trừ khi mày xóa thì mới mất

// const LS = localStorage.setItem('name', 'Nam'); //khai báo một thằng với key là name và value là Nam
// localStorage.setItem('age', 22); //khai báo một thằng với key là age và value là 22
// console.log(localStorage.getItem('name')) //lấy ra value với key là name
// localStorage.removeItem('age'); //xóa thằng có key là age
// localStorage.clear(); //xóa hết 

//Đối với Session Storage // thằng này thì khi thoát khỏi tab đang tương tác hoặc mở một tab mới cùng domain
// thì data đều bị xóa hết, đ' lưu cm gì luôn

//đều có các method giống với local storage như setitem, getitem, remove, clear,..

