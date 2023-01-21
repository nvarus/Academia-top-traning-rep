//@ts-ignore
const {sum} = require('../src/script')  // подключаем именно js файл

test('Sum should return sum of two values', () => {
	expect(sum(1, 3)).toBe(4);
})
