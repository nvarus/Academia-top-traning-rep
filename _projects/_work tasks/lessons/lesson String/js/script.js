// let a = 'Привет, как дела? как найти товар в магазине и как его';
// let serchPerson = 'как';
// let personLower = serchPerson.toLowerCase();
// let aLower = a.toLowerCase();
// let search = aLower.indexOf(personLower);
// // console.log(search)
// while (search !== -1) {
// 	console.log(aLower.slice(search, search + serchPerson.length));
// 	console.log(search)
// 	search = aLower.indexOf(personLower, search + 1);
// }

let string1 = 'hello';
let string2 = 'defender';
function lenStr(str1, str2) {
	if (str1.length > str2.length) return 1;
	else if (str1.length < str2.length) return -1;
	else return 0;
}

const firstUpper = (str) => str[0].toUpperCase() + str.substring(1);

const findVowel = (str, count = 0) => {
	let lowerStr = str.toLowerCase();
	for (let letter of lowerStr) {
		if (letter === 'а' || letter === 'у' || letter === 'о' || letter === 'е') count++;
	}
	return count;
}