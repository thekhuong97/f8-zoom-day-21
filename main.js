console.log(
  "* Phương thức push2: Thêm một hoặc nhiều phần tử vào cuối mảng. Trả về độ dài mới của mảng. Mảng gốc bị thay đổi"
);

Array.prototype.push2 = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
};

let fruits = ["Apple", "Banana"]; //Mảng gốc
console.log(fruits.push2("Cherry")); //Trả về độ dài mới của mảng
// console.log(fruits.push2("Orange", "Strawberry"));
// console.log(fruits.push2("Mango", "Kiwi", "Watermelon"));
console.log(fruits); //Mảng gốc bị thay đổi
