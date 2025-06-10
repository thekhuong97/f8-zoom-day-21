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

console.log(
  "* Phương thức pop2: Loại bỏ phần tử cuối cùng của mảng và trả về phần tử đó. Mảng gốc bị thay đổi"
);
Array.prototype.pop2 = function () {
  if (this.length === 0) {
    return undefined;
  }
  let lastElement = this[this.length - 1];
  this.length = this.length - 1;
  return lastElement;
};

let colors = ["Red", "Green", "Blue"]; //Mảng gốc
console.log(colors.pop2()); //Trả về phần tử bị xoá khỏi mảng
console.log(colors); //Mảng gốc bị thay đổi
