const students = [
    {id: 23, firstName : "Kalam", surname: 'Rahman'},
    {id: 45, firstName : "Kuddus", surname: 'Boyati'},
    {id: 56, firstName : "Mannaa", surname: 'Dey'},
    {id: 40, firstName : "Razzak", surname: 'Chowdhury'},
];

const surname = students.map(s => s.surname);
console.log(surname);
const ids = students.map(s => s.id);
console.log(ids);