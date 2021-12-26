const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // o: ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // o: 3

languages.length = 4; // ['JavaScript', 'Ruby', 'Python', <Empty>]
console.log(languages); // o: ['JavaScript', 'Ruby', 'Python', <Empty>]
console.log(languages.length); // o: 4

languages.length = 1; // ['JavaScript']
console.log(languages); // o: ['JavaScript']
console.log(languages.length); // o: 1

languages.length = 3; // ['JavaScript', <two empty>]
console.log(languages); // o: ['JavaScript', <two empty>]
console.log(languages.length); // 3

languages.length = 1; // ['JavaScript']
languages[2] = 'Python'; // ['JavaScript', <empty>, 'Python']
console.log(languages); // o: ['JavaScript', <empty>, 'Python']
console.log(languages[1]); // o: undefined
console.log(languages.length); // o: 3