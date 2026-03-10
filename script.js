const heading = document.querySelector('h1');
const listBtn = document.querySelector('#save-list');
const listInput = document.querySelector('.list-input');
const listInputs = document.querySelectorAll('.list-input');

heading.textContent = 'Shopping List';

console.log(listBtn.textContent);

console.log(listInput.placeholder);

console.log(listInputs);

const user = {
	firstName: 'John',
	lastName: 'Doe',
	age: 100,
	gender: 'Male',
};

console.log(Object.keys(user)); // returns an array of object keys
console.log(Object.values(user)); // returns an array of object values
