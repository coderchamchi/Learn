// Object Date

var date = new Date();

console.log(date);
console.log(typeof date);

console.log(date.getFullYear());//lấy ra năm hiện tại
console.log(date.getMonth()+1);//tháng nó hiện theo số index, vd như tháng hiện tại là tháng 2 thì nó trả về là 1, z nên +1 cho đúng với số tháng
console.log(date.getDate());//Ngày mồng 3
console.log(date.getDay()+1); //tương tự month, ngày hiện tại là thứ 7 nhưng nó theo index nên chỉ là 6, muốn đúng thứ thì +1
